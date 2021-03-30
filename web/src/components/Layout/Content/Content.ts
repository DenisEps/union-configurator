import { Layout } from 'antd';
import styled from 'styled-components';
const { Content: OriginalContent } = Layout;

export const AntdContent = styled(OriginalContent)`
  padding: 0 50px;
  margin-top: 24px;
  background: #fff;
`;

export const SiteContent = styled.div`
  min-height: 280px;
  background: #fff;
`;
