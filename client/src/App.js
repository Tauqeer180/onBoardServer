import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./assets/css/Tcss.css";
import KYC from "./Components/KYC";
import Multiple from "./Components/MultipleShareKYC";
import CTI from "./Components/CTI";
import KYB from "./Components/KYB";
import SDKYB from "./Components/supportingDocKYB";
import CI from "./Components/CI";
import { CheckList } from "./Components/checklist";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import MainDashboard from "./Components/MainDashboard";
import { Header } from "./Components/Navbar";
// import checklistR from "./Components/CheckList/"

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <div>
<<<<<<< HEAD
              <Route exact path="/" component={MainDashboard} />
              <Route path="/ci" component={CI} />
              <Route path="/cti" component={CTI} />
              <Route path="/kyc" component={KYC} />
              <Route path="/kyb" component={KYB} />
              <Route path="/sdkyb" component={SDKYB} />
              <Route path="/check-List" component={CheckList} />
              <Route path="/supporting-doc-kyb" component={SDKYB} />
=======
              <Route exact path='/' component={MainDashboard} />
              <Route path='/ci' component={CI} />
              <Route path='/ci/:urlid' component={CI} />
              <Route path='/cti' component={CTI} />
              <Route path='/kyc' component={KYC} />
              <Route path='/kyb' component={KYB} />
              <Route path='/sdkyb' component={SDKYB} />
              <Route path='/check-List' component={CheckList} />
              <Route path='/supporting-doc-kyb' component={SDKYB} />
>>>>>>> 842049a3a72a0f7c5e4d35f9df959853437388bb
            </div>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
