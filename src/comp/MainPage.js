import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from './Layout';
import { Home } from './Home';
import { Caro } from './Caro';
import { Banner } from './PageBanner';
import { Awards } from './Awards';
import  NavigationBar  from './NavBar';

export const MainPage = props =>(
    <>
        <NavigationBar/>
        <Banner/>
        <Layout>
          <Caro/>
          <Home/>
          <Awards/>
        </Layout>
    </>
)