import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from './Layout';
import { Home } from './Home';
import { Caro } from './Caro';
import { MovingJumbo } from './MovingJumpo';

export const MainPage = props =>(
  <>
      <MovingJumbo title="" />
      <Caro/>
      <Layout>
      <Home/>
      </Layout>
  </>
)