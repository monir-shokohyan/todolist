// src/components/Board.tsx
import Column from './Column';

interface BoardProps {
  columns: any;
  onDelete: (taskId: number, columnId: string) => void;
}

function Board({ columns, onDelete }: BoardProps) {  
  return (
    <div className="flex flex-row space-x-4 h-[60vh] overflow-y-auto">
      {Object.entries(columns).map(([id, tasks]:any) => (
        <Column key={id} id={id} tasks={tasks} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Board;