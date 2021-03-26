import { ReactEventHandler } from 'react';

import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  DownOutlined,
  DownloadOutlined,
  SwapOutlined,
  PrinterOutlined
} from '@ant-design/icons';

type TIcon =
  | 'EditOutlined'
  | 'DeleteOutlined'
  | 'CopyOutlined'
  | 'PlusOutlined'
  | 'DownOutlined'
  | 'DownloadOutlined'
  | 'SwapOutlined'
  | 'PrinterOutlined';

interface IconProps {
  type: TIcon;
  rounded?: boolean;
  twoToneColor?: string;
  onClick?: ReactEventHandler;
  style?: Record<string, unknown>;
}

export const Icon = (props: IconProps): JSX.Element | null => {
  let icon;

  const { style, ...otherProps } = props;

  const newStyle = { ...style, cursor: 'pointer' };

  switch (props.type) {
    case 'EditOutlined':
      icon = <EditOutlined style={newStyle} {...otherProps} />;
      break;
    case 'DeleteOutlined':
      icon = <DeleteOutlined style={newStyle} {...otherProps} />;
      break;
    case 'CopyOutlined':
      icon = <CopyOutlined style={newStyle} {...otherProps} />;
      break;
    case 'PlusOutlined':
      icon = <PlusOutlined style={newStyle} {...otherProps} />;
      break;
    case 'DownOutlined':
      icon = <DownOutlined style={newStyle} {...otherProps} />;
      break;
    case 'DownloadOutlined':
      icon = <DownloadOutlined style={newStyle} {...otherProps} />;
      break;
    case 'SwapOutlined':
      icon = <SwapOutlined style={newStyle} {...otherProps} />;
      break;
    case 'PrinterOutlined':
      icon = <PrinterOutlined style={newStyle} {...otherProps} />;
      break;
    default:
      return null;
  }

  return icon;
};
