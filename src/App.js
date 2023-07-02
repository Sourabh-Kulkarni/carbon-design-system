import "./app.scss";
import React, { Component } from "react";
import "./app.scss";
import { Button, Content } from "@carbon/react";
import TutorialHeader from "./components/TutorialHeader";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import RepoPage from "./content/RepoPage";

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/repo" element={<RepoPage />} />
          </Routes>
        </Content>
      </>
    );
  }
}

export default App;
