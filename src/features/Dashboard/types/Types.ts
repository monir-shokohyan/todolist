export interface BoardProps {
  columns: any;
  onDelete: (taskId: number, columnId: string) => void;
}
export interface ColumnProps {
  id: 'todo' | 'inprogress' | 'done';
  tasks: any[];
  onDelete: (taskId: number, columnId: string) => void;
}

export interface TaskCardProps {
  task: {id: any; title: string};
  index: number;
  onDelete: (id: any) => void;
}

export interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

export interface FormData {
  title: string;
}
