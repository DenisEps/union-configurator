import React from 'react';

import { Icon } from 'components/Icon';
import { Space, Tooltip } from 'antd';

import { ColumnType } from 'antd/es/table';
import { RenderedCell } from 'rc-table/lib/interface';
import { IInvoice } from './types';
import { formatNumber } from 'helpers/number';

export const columns: ColumnType<IInvoice>[] = [
  {
    title: 'Счет',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Контрагент',
    dataIndex: 'client',
    key: 'client',
  },
  {
    title: 'Сумма (₽)',
    dataIndex: 'sum',
    key: 'sum',
    render: formatNumber,
  },
  {
    title: 'Комментарий',
    dataIndex: 'comment',
    key: 'comment',
  },
  {
    title: 'Действия',
    dataIndex: 'actions',
    key: 'actions',
    render: function Render(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _: unknown,
      record: IInvoice,
    ): React.ReactNode | RenderedCell<IInvoice> {
      console.log(record);
      return (
        <Space size='middle'>
          <Tooltip title='Скопировать'>
            <Icon style={{ fontSize: '18px' }} type='CopyOutlined' />
          </Tooltip>
          <Tooltip title='Редактировать'>
            <Icon style={{ fontSize: '18px' }} type='EditOutlined' />
          </Tooltip>
          <Tooltip title='Удалить'>
            <Icon style={{ fontSize: '18px' }} type='DeleteOutlined' />
          </Tooltip>
        </Space>
      );
    },
  },
];
