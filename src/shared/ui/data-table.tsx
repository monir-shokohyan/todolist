import { Table, TableProps } from 'antd'

import { Local } from './table'

export const DataTable = (props: TableProps) => {
  return (
    <Table
      {...props}
      locale={{
        emptyText: <Local />,
      }}
    />
  )
}
