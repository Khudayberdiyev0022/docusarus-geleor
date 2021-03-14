import React from "react";
import DevelopmentPage from "./components/DevelopmentPage";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div style={{marginBottom: "1000vh"}}>
     <Router>
       <Switch>
         <Route exact path="/">
         <Home />
      
         </Route>
         <Route path="/development">
           <DevelopmentPage />
         </Route>
       </Switch>
       <Footer />
     </Router>
    </div>
  );
};

export default App;
