import { BoardProps } from '../types';
import Column from './Column';

function Board({ columns, onDelete }: BoardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-[60vh] md:h-[60vh] overflow-y-auto md:overflow-x-auto md:overflow-y-hidden px-4 md:px-6">
      {Object.entries(columns).map(([id, tasks]: any) => (
        <Column key={id} id={id} tasks={tasks} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Board;