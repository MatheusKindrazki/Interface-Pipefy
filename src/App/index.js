import React from "react";
import GlobalStyle from "../styles/global";

import Header from "./components/Header";
import Board from "./components/Board";

// import { Container } from './styles';

export default function App() {
  return (
  <>
    <Header />
    <Board />
    <GlobalStyle />
  </>  
    );
}
