import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from './comp/Layout';
import { Home } from './comp/Home';
import { Caro } from './comp/Caro';
import { Jumbo } from './comp/Jumbo';
import NavigationBar from './comp/NavBar';

class App extends React.Component{
  render(){
    return(
      <React.Fragment >
        <NavigationBar/>
        <Layout>
          <Caro/>
          <Home/>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;
