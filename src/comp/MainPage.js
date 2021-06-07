import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from './Layout';
import { Home } from './Home';
import { Caro } from './Caro';
import { Awards } from './Awards';

export const MainPage = props =>(
  <>
      <Caro/>
      <Layout>
      <Home/>
      <Awards/>
      </Layout>
  </>
)