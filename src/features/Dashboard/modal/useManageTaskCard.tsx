import { message } from 'antd';
import React, { useState } from 'react'
import { TaskCardProps } from '../types';

const useManageTaskCard = ({onDelete, task}:Omit<TaskCardProps,"index">) => {
      const handleDelete = () => {
    onDelete(task.id);
    message.success('Task deleted successfully!');
  };
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  return {handleDelete, toggleExpand, isExpanded}
}

export default useManageTaskCard