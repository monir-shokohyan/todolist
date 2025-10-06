import { useId } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Form, Switch } from 'antd'

import { StyledTextHover } from '@shared/styles/StyledTextHover'

interface Props<Form extends FieldValues> {
  name: keyof Form
  control: Control<Form>
  label: string
}

export const FormSwitch = <Form extends FieldValues>({
  name,
  control,
  label,
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
          htmlFor={labelId}
        >
          <Switch
            id={labelId}
            checked={field.value}
            onChange={field.onChange}
          />
          {error?.message && (
            <StyledTextHover type="danger">{error.message}</StyledTextHover>
          )}
        </Form.Item>
      )}
    />
  )
}
