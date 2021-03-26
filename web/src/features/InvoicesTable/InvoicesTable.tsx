import React from 'react';
import { Table, PageHeader, Button } from 'antd';

import { Icon } from 'components/Icon';
import { TableWrapper } from './styled';

import { columns } from './columns';
import { data } from './data';

interface InvoicesTableProps {}

export const InvoicesTable: React.FC<InvoicesTableProps> = ({}) => {
  return (
    <>
      <PageHeader
        title='Журнал счетов'
        extra={[
          <Button
            key='1'
            type='primary'
            size='large'
            shape='round'
            icon={<Icon style={{ fontSize: '18px' }} type='PlusOutlined' />}
          >
            Создать счет
          </Button>,
        ]}
      />
      <TableWrapper>
        <Table dataSource={data} columns={columns} />
      </TableWrapper>
    </>
  );
};
