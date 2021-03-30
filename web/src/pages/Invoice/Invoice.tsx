import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  PageHeader,
  Button,
  Descriptions,
  Input,
  Dropdown,
  Menu,
  DatePicker,
} from 'antd';

import { AntdContent, SiteContent } from 'components/Layout/Content';
import { Icon } from 'components/Icon';

import { ConstructionsTable } from 'features/ConstructionsTable';

import { dateFormat } from 'constants/constants';

const { TextArea } = Input;

export const Invoice: React.FC = () => {
  const history = useHistory();

  return (
    <AntdContent>
      <SiteContent>
        <PageHeader
          title='Счет №12345'
          onBack={() => history.push('/invoices')}
          extra={[
            <Button key='1' icon={<Icon type='PlusOutlined' />} type='primary'>
              Создать конструкцию
            </Button>,
            <Dropdown
              key='2'
              overlay={
                <Menu>
                  <Menu.Item key='3'>
                    <Icon type='DownloadOutlined' />
                    Скачать
                  </Menu.Item>
                  <Menu.Item key='4'>
                    <Icon type='PrinterOutlined' />
                    Распечатать
                  </Menu.Item>
                  <Menu.Item key='5'>
                    <Icon type='SwapOutlined' />
                    Отправить в КИС
                  </Menu.Item>
                </Menu>
              }
            >
              <Button type='default'>
                <Icon type='DownOutlined' /> Действия
              </Button>
            </Dropdown>,
          ]}
        >
          <Descriptions
            
            size='small'
            layout='vertical'
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label='Дата'>
              <DatePicker format={dateFormat} />
            </Descriptions.Item>
            <Descriptions.Item label='Контрагент'>
              Пупкин Василий Васильевич
            </Descriptions.Item>
            <Descriptions.Item label='Комментарий'>
              <TextArea rows={1} />
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <ConstructionsTable />
      </SiteContent>
    </AntdContent>
  );
};
