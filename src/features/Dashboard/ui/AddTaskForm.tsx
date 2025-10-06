import { useState } from 'react';

interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="border border-gray-300 p-2 flex-grow rounded-l"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;