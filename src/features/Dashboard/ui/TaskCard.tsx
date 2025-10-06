import { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface TaskCardProps {
  task: any;
  index: number;
  onDelete: () => void;
}

const TaskCard = memo(({ task, index, onDelete }: TaskCardProps) => (
  <Draggable draggableId={String(task.id)} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="bg-white p-3 mb-2 rounded shadow flex justify-between items-center"
      >
        <span>{task.title}</span>
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
    )}
  </Draggable>
));

export default TaskCard;