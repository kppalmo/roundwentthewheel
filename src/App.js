import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { MainPage } from './comp/MainPage';
import { Cast } from './comp/Cast';
import { CTeam } from './comp/CTeam';
import { AboutPage } from './comp/AboutPage';
import { ImgView } from './comp/ImgView';
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
            <Route exact path="/photos" component={ImgView} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </BrowserRouter>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App;
