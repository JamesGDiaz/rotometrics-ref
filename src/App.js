import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NewForm from "./components/NewForm/NewForm";
import PrintPDF from "./components/PrintPDF/PrintPDF";
import Image from "react-bootstrap/Image";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="App">
            <Header />
            <div className="Body">
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/new" component={NewForm} exact />
                <Route path="/print:param" component={PrintPDF} exact />
                <Route component={Error} />
              </Switch>
              <div className="footer">
                <Image />
                <p class="text-center font-weight-light sm">
                  {"Created by Rose Labs"}
                </p>
              </div>
            </div>
          </div>
        </HashRouter>
        <div />
      </div>
    );
  }
}

export default App;
