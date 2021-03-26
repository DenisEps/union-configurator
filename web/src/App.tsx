import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { AppStyles } from './App.styled';

import { Invoices } from 'pages/Invoices';

const { Footer } = Layout;

const App: React.FC = () => {
  return (
    <>
      <AppStyles />
      <Layout>
        <Switch>
          {/* All invoices */}
          <Route path='/invoices' exact>
            <Invoices />
          </Route>

          {/* Redirect to default page */}
          <Redirect from='*' to='/invoices' />
        </Switch>
        <Footer style={{ textAlign: 'center' }}>Union Configurator ©2021</Footer>
      </Layout>
    </>
  );
};

export default App;
