import { ReactNode } from 'react'
import { Form, FormProps } from 'antd'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 4px !important;
  }
`
export const VerticalForm = ({ children, ...props }: FormProps) => {
  return (
    <StyledForm
      layout="vertical"
      {...props}
    >
      {children as ReactNode}
    </StyledForm>
  )
}
