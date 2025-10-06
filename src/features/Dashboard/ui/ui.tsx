import { useReducer, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Board from './Board';
import { useFetch } from '@shared/api/fetchers';
import AddTaskForm from './AddTaskForm';
import { TaskReducer } from '@shared/reducers';
import { Paths } from '@shared/api/paths/paths';

function Ui() {
  const STORAGE_KEY = 'taskState';
  const saved = localStorage.getItem(STORAGE_KEY);
  const initialColumns = saved ? JSON.parse(saved) : { todo: [], inprogress: [], done: [] };
  const [state, dispatch] = useReducer(TaskReducer, {
    columns: initialColumns,
    loading: !saved,
    error: null,
  });

  const { data, isLoading, error } = useFetch(Paths.Todo);

  useEffect(() => {
    if(saved) return;
      if (isLoading) dispatch({ type: 'FETCH_START' });
      if (error) dispatch({ type: 'FETCH_ERROR', payload: error });
      if (data && data.length>0) dispatch({ type: 'FETCH_SUCCESS', payload: data?.slice(0,10) });
    
  }, [data, isLoading, error]);

  useEffect(() => {
    if(data.length===0) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.columns));
  }, [state.columns]);

  const handleAddTask = (title:any) => {
    dispatch({ type: 'ADD_TASK', payload: title });
  };

  const handleDeleteTask = (taskId:any, columnId:any) => {
    dispatch({ type: 'DELETE_TASK', payload: { taskId, columnId } });
  };

  const onDragEnd = (result:any) => {
    dispatch({ type: 'MOVE_TASK', payload: result });
  };

  if (state.loading) return <div className="p-4 text-center">Loading...</div>;
  if (state.error) return <div className="p-4 text-center text-red-500">Error: {state.error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dynamic Task Board</h1>
      <AddTaskForm onAdd={handleAddTask} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Board columns={state.columns} onDelete={handleDeleteTask} />
        </DragDropContext>
    </div>
  );
}

export {Ui};