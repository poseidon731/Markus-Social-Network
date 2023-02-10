import React from "react";
import GlobalStyle from "./components/_global/GlobalStyles";
import "./App.css"
import Menu from "./components/Menu";
import { MainContainer } from "./components/MainContainer";
import Header from "./components/Header";
import { FixedHeader } from "./components/FixedHeader";
import { Footer } from "./components/Footer";
import MainRoutes from "./routes";

const App = () => {

  return (
    <div className="App">
        <Menu />
        <MainContainer>
          <Header />
          <FixedHeader />
          <MainRoutes />
          <Footer />
        </MainContainer>

      <GlobalStyle />
    </div>
  );
}

export default App;
