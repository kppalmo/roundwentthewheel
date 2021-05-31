import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from './comp/Layout';
import { Home } from './comp/Home';
import { Caro } from './comp/Caro';
import { Banner } from './comp/PageBanner';
import { Awards } from './comp/Awards';
import NavigationBar from './comp/NavBar';


class App extends React.Component{
  render(){
    return(
      <React.Fragment >
        <NavigationBar/>
        <Banner/>
        <Layout>
          <Caro/>
          <Home/>
          <Awards/>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;
