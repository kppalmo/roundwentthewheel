import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Home } from "./Home";
import { Caro } from "./Caro";
import { MovingJumbo } from "./MovingJumpo";
import { PurchasePlay } from "./PurchasePlay";

export const MainPage = (props) => (
  <>
    <MovingJumbo title="A  Dystopian Play by Frank Ceruzzi" />
    <PurchasePlay />
    <Caro />
    <Home />
  </>
);
