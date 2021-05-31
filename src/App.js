import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { MainPage } from './comp/MainPage';
import { Cast } from './comp/Cast';


class App extends React.Component{
  render(){
    return(
      <React.Fragment >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/cast" component={Cast} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;
