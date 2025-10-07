import { State, Action, Column, Task } from '../types/task-reducer';
function TaskReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS': {
      const newColumns: Column = { todo: [], inprogress: [], done: [] };
      action.payload.forEach((todo: { id: number; title: string; completed: boolean }) => {
        const col = todo.completed ? 'done' : 'todo';
        newColumns[col].push({ id: todo.id, title: todo.title });
      });
      return { ...state, columns: newColumns, loading: false };
    }
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_TASK':
      return {
        ...state,
        columns: {
          ...state.columns,
          todo: [...state.columns.todo, { id: Date.now(), title: action.payload }],
        },
      };
    case 'DELETE_TASK': {
      const { taskId, columnId } = action.payload as { taskId: number; columnId: string };
      return {
        ...state,
        columns: {
          ...state.columns,
          [columnId]: state.columns[columnId].filter((t: Task) => t.id !== taskId),
        },
      };
    }
    case 'MOVE_TASK': {
      const { source, destination } = action.payload as {
        source: { droppableId: string; index: number };
        destination: { droppableId: string; index: number };
      };
      if (!destination) return state;
      const newColumns = { ...state.columns };
      const sourceCol = newColumns[source.droppableId];
      const destCol = newColumns[destination.droppableId];
      const [task] = sourceCol.splice(source.index, 1);
      if (source.droppableId === destination.droppableId) {
        sourceCol.splice(destination.index, 0, task);
      } else {
        destCol.splice(destination.index, 0, task);
      }
      return { ...state, columns: newColumns };
    }
    default:
      return state;
  }
}

export  { TaskReducer };