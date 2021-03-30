import React from 'react';

import { Icon } from 'components/Icon';
import { Space, Tooltip } from 'antd';

import { ColumnType } from 'antd/es/table';
import { RenderedCell } from 'rc-table/lib/interface';
import { IContruction } from '../../types';
import { formatNumber } from 'helpers/number';

export const columns: ColumnType<IContruction>[] = [
  {
    title: 'Действия',
    dataIndex: 'actions',
    key: 'actions',
    render: function Render(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _: unknown,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      record: IContruction,
    ): React.ReactNode | RenderedCell<IContruction> {
      const style = { fontSize: '16px', color: '#1890ff' };
      return (
        <Space size='middle'>
          <Tooltip title='Скопировать'>
            <Icon style={style} type='CopyOutlined' />
          </Tooltip>
          <Tooltip title='Редактировать'>
            <Icon style={style} type='EditOutlined' />
          </Tooltip>
          <Tooltip title='Удалить'>
            <Icon style={style} type='DeleteOutlined' />
          </Tooltip>
        </Space>
      );
    },
  },
  {
    title: '№',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Фабрика',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
  },
  {
    title: 'Конструкция',
    dataIndex: 'construction',
    key: 'construction',
  },
  {
    title: 'Коллекция',
    dataIndex: 'collection',
    key: 'collection',
  },
  {
    title: 'Модель',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Отделка',
    dataIndex: 'finish',
    key: 'finish',
  },
  {
    title: 'Ш',
    dataIndex: 'width',
    key: 'width',
  },
  {
    title: 'В',
    dataIndex: 'height',
    key: 'height',
  },
  {
    title: 'Короб',
    dataIndex: 'frame',
    key: 'frame',
  },
  {
    title: 'Откр.',
    dataIndex: 'opening',
    key: 'opening',
  },
  {
    title: 'Наличники',
    dataIndex: 'casing',
    key: 'casing',
  },
  {
    title: 'Кол-во',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Цена прайс',
    dataIndex: 'pricelistPrice',
    key: 'pricelistPrice',
    render: formatNumber,
    width: 110,
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
    render: formatNumber,
    width: 110,
  },
  {
    title: 'Сумма',
    dataIndex: 'sum',
    key: 'sum',
    render: formatNumber,
    width: 110,
  },
  {
    title: 'Комментарий',
    dataIndex: 'comment',
    key: 'comment',
  },
];
