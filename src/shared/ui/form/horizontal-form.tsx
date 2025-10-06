import { ReactNode } from 'react'
import { Form, FormProps } from 'antd'

export const HorizontalForm = ({ children, ...props }: FormProps) => {
  return (
    <Form
      layout="inline"
      {...props}
    >
      {children as ReactNode}
    </Form>
  )
}
