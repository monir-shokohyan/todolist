import { Button, Input } from 'antd';
import { Controller } from 'react-hook-form';
import { AddTaskFormProps } from '../types';
import { useManageAddTask } from '../modal/useManageAddTask';

function AddTaskForm({ onAdd }: AddTaskFormProps) {
const {handleSubmit, errors, onSubmit, control} = useManageAddTask({onAdd})
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="flex mt-4 mb-2 gap-2">
      <Controller
        name="title"
        control={control}
        rules={{
          required: 'Task title is required',
          minLength: {
            value: 3,
            message: 'Task title must be at least 3 characters',
          },
        }}
        render={({ field }) => (
          <Input
            {...field}
            placeholder="Add a new task"
            className="flex-grow"
            status={errors.title ? 'error' : undefined}
            onChange={(e) => field.onChange(e.target.value)}
          />
        )}
      />
      <Button type="primary" htmlType="submit" className="h-full">
        Add Task
      </Button>
    </form>
      {errors.title && (
        <div className="text-red-500 text-sm mt-1">{errors.title.message}</div>
      )}
    </>
  );
}

export default AddTaskForm;