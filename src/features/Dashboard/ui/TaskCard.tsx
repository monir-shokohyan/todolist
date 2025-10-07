import { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Button } from 'antd';
import { DeleteOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { TaskCardProps } from '../types';
import useManageTaskCard from '../modal/useManageTaskCard';

const TaskCard = memo(({ task, index, onDelete }: TaskCardProps) => {
  const { handleDelete, toggleExpand, isExpanded } = useManageTaskCard({ onDelete, task });

  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`p-2 mb-3 rounded-lg shadow-sm border transition-all duration-200
            ${snapshot.isDragging ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200'}
            w-full flex flex-col`}
        >
          <div className="flex justify-between items-center" {...provided.dragHandleProps}>
            <span className="text-gray-800 font-medium truncate flex-1">{task.title}</span>
            <div className="flex space-x-2">
              <Button
                type="text"
                icon={isExpanded ? <UpOutlined /> : <DownOutlined />}
                className="text-gray-600 hover:text-gray-800"
                onClick={toggleExpand}
              />
              <Button
                type="text"
                icon={<DeleteOutlined />}
                className="text-red-500 hover:text-red-700"
                onClick={handleDelete}
              />
            </div>
          </div>
          {isExpanded && (
            <div className="mt-2 text-gray-600 text-sm">
              {task.title ? (
                <p>{task.title}</p>
              ) : (
                <p className="italic">No additional details available.</p>
              )}
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
});

export default TaskCard;