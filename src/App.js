import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="Body">
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/new" component={NewForm} exact />
                <Route path="/print/:data" component={PrintPDF} exact />
              </Switch>
            </div>
            <div className="Footer">
              <Image />
              <p className="text-center font-weight-light sm">
                {"Created by "}
                <Image
                  src={require("./assets/rose-labs-2.png")}
                  width={"95px"}
                  height={"71px"}
                  style={{ marginBottom: "30px", marginLeft: "-1px" }}
                />
                {". Powered by  "}
                <Image
                  src={require("./assets/react-icon.png")}
                  width={"20px"}
                  height={"20px"}
                />
                {"ReactJS"}
              </p>
            </div>
          </div>
        </BrowserRouter>
        <div />
      </div>
    );
  }
}

export default App;
