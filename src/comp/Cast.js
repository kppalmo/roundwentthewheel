import React from 'react';
import  NavigationBar  from './NavBar';
import { Banner } from './PageBanner';
import { Layout } from './Layout';


export const Cast = props => (
    <div>
        <NavigationBar/>
        <Banner/>
        <Layout>
            <h1>Test</h1>
        </Layout>
    </div>
)