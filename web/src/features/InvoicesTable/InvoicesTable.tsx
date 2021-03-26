import React from 'react';
import { Table } from 'antd';

import { TableWrapper } from './styled';

import { columns } from './columns';
import { data } from './data';

interface InvoicesTableProps {}

export const InvoicesTable: React.FC<InvoicesTableProps> = ({}) => {
  return (
    <TableWrapper>
      <Table dataSource={data} columns={columns} />
    </TableWrapper>
  );
};
