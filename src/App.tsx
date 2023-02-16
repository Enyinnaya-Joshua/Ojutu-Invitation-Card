import React from "react";
import AllRouter from "./AllRouter/AllRouter";
import { BrowserRouter } from "react-router-dom";
import Header from "./MainPage/Header";
import Footer from "./MainPage/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AllRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
