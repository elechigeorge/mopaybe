import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./component/Header";

// screens import
import HomeScreen from "./screen/HomeScreen";
import BusinessLogin from "./screen/BusinessLogin";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="">
        <Route path="/" component={HomeScreen} exact />
        <Container>
          <Route path="/business/login" component={BusinessLogin} />
        </Container>
      </main>
    </Router>
  );
};

export default App;
