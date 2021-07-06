import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './Home';
import { Caro } from './Caro';
import { MovingJumbo } from './MovingJumpo';

export const MainPage = props =>(
  <>
  <MovingJumbo title="The future begins...AGAIN!"/>
  <Caro/>
  <Home/>
  
      
  </>
)