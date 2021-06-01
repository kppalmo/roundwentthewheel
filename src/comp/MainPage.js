import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from './Layout';
import { Home } from './Home';
import { Caro } from './Caro';
import { Awards } from './Awards';
import { MovingJumbo } from './MovingJumpo';

export const MainPage = props =>(
  <>
    <MovingJumbo title="Home Page"/>
    <Layout>
      <Caro/>
      <Home/>
      <Awards/>
    </Layout>
  </>
)