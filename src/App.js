import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { MainPage } from './comp/MainPage';
import { Cast } from './comp/Cast';
import { CTeam } from './comp/CTeam';
import  NavigationBar  from './comp/NavBar';
import { Banner } from './comp/PageBanner';
import { Footer } from './comp/Footer';


class App extends React.Component{
  render(){
    return(
      <React.Fragment >
        <NavigationBar/>
        <Banner/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/cast" component={Cast} />
            <Route exact path="/creativeteam" component={CTeam} />
          </Switch>
        </BrowserRouter>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App;
