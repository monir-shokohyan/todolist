// src/components/Column.tsx
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const columnTitles = {
  todo: 'To Do',
  inprogress: 'In Progress',
  done: 'Done',
};

interface ColumnProps {
  id: 'todo' | 'inprogress' | 'done';
  tasks: any[];
  onDelete: (taskId: number, columnId: string) => void;
}

function Column({ id, tasks, onDelete }: ColumnProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg w-80">
      <h2 className="text-lg font-semibold mb-2">{columnTitles[id]}</h2>
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="min-h-[200px]"
          >
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                onDelete={() => onDelete(task.id, id)}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Column;