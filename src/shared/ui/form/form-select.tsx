import { useId } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Form, Select, SelectProps } from 'antd'

import { StyledTextHover } from '@shared/styles/StyledTextHover'

interface Props<Form extends FieldValues> extends SelectProps {
  name: keyof Form
  control: Control<Form>
  label: string
  required?: boolean
}

export const FormSelect = <Form extends FieldValues>({
  name,
  control,
  label,
  required,
  ...props
}: Props<Form>) => {
  const id = useId()
  const labelId = `form-switch-${id}`

  return (
    <Controller
      name={name as Path<Form>}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
          required={required}
          htmlFor={labelId}
        >
          <Select
            size="large"
            id={labelId}
            {...field}
            placeholder="placeholder is not working"
            {...props}
          />
          {error?.message && (
            <StyledTextHover type="danger">{error.message}</StyledTextHover>
          )}
        </Form.Item>
      )}
    />
  )
}
