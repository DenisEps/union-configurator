import React from 'react';

import { AntdContent, SiteContent } from 'components/Layout/Content';

import { InvoicesTable } from 'features/InvoicesTable';

export const Invoices: React.FC = () => {
  return (
    <AntdContent>
      <SiteContent>
        <InvoicesTable />
      </SiteContent>
    </AntdContent>
  );
};
