import { DragDropContext } from 'react-beautiful-dnd';
import Board from './Board';
import AddTaskForm from './AddTaskForm';
import { Loader } from '@shared/ui/loader/Loader';
import { useManageDashboard } from '../modal/useManageDashboard';

function Ui() {
 const { state, handleAddTask, handleDeleteTask, onDragEnd} = useManageDashboard()
  if (state.loading) return <Loader />;
  if (state.error) return <div className="p-4 text-center text-red-500">Error: {state.error.message}</div>;

  return (
    <div className="p-4 border-2 border-gray-200 bg-gray-100 shadow-md">
      <h1 className="text-2xl font-bold mb-4">Dynamic Task Board</h1>
      <AddTaskForm onAdd={handleAddTask} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Board columns={state.columns} onDelete={handleDeleteTask} />
        </DragDropContext>
    </div>
  );
}

export {Ui};