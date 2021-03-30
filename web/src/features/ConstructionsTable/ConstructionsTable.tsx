import React from 'react';
import { Table } from 'antd';

import { TableWrapper } from './styled';

import { columns } from './columns';
import { data } from './data';

interface ConstructionsTableProps {}

export const ConstructionsTable: React.FC<ConstructionsTableProps> = ({}) => {
  return (
    <TableWrapper>
      <Table dataSource={data} columns={columns} />
    </TableWrapper>
  );
};
