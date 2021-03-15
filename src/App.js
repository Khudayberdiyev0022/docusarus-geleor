import React from "react";
import DevelopmentPage from "./components/Development/DevelopmentPage";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomeMobile from "./components/Home/HomeMobile";
import Procces from "./components/Process/Procces";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            <HomeMobile />
          </Route>
          <Route path="/service">
            <DevelopmentPage />
          </Route>
          <Route path="/building">
            <Procces />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
