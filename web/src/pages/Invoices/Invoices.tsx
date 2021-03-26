import React from 'react';
import { PageHeader, Button } from 'antd';

import { AntdContent, SiteContent } from 'components/Layout/Content';
import { Icon } from 'components/Icon';

import { InvoicesTable } from 'features/InvoicesTable';

export const Invoices: React.FC = () => {
  return (
    <AntdContent>
      <SiteContent>
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
        <InvoicesTable />
      </SiteContent>
    </AntdContent>
  );
};
