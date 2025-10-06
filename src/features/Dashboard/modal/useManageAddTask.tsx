import React, { useState } from 'react'
import { AddTaskFormProps, FormData } from '../types';
import { useForm } from 'react-hook-form';

const  useManageAddTask  = ({onAdd}:AddTaskFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: '',
    },
  });

  const onSubmit = (data: FormData) => {
    onAdd(data.title);
    reset();
  };

  return { handleSubmit, errors, control, onSubmit}
}

export  { useManageAddTask }