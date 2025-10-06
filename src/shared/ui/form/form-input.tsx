import { useId } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Form, Input, InputProps } from 'antd'

import { StyledTextHover } from '@shared/styles/StyledTextHover'

interface Props<Form extends FieldValues> extends Omit<InputProps, 'name'> {
  name: keyof Form
  control: Control<Form>
  label: string
  layout?: 'horizontal' | 'vertical'
  required?: boolean
}

export const FormInput = <Form extends FieldValues>({
  name,
  control,
  label,
  required,
  layout = 'horizontal',
  ...attrs
}: Props<Form>) => {
  const id = useId()
  const labelId = `form-input-${id}`

  return (
    <Controller
      name={name as Path<Form>}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
          required={required}
          htmlFor={labelId}
          layout={layout}
        >
          <Input
            size="large"
            id={labelId}
            {...field}
            {...attrs}
          />
          {error?.message && (
            <StyledTextHover type="danger">{error.message}</StyledTextHover>
          )}
        </Form.Item>
      )}
    />
  )
}
