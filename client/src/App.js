import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./component/Header";

// screens import
import HomeScreen from "./screen/HomeScreen";
import BusinessLogin from "./screen/BusinessLogin";
import BusinessRegister from "./screen/BusinessRegister";
import About from "./screen/About";
import BusinessDashboard from "./screen/BusinessDashboard";
import CreateProfile from "./screen/CreateProfile";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="">
        <Route path="/" component={HomeScreen} exact />
        <Container>
          <Route path="/business/login" component={BusinessLogin} />
          <Route path="/business/register" component={BusinessRegister} />

          <Route path="/business/dashboard" component={BusinessDashboard} />

          {/* static view */}
          <Route path="/about" component={About} />
          <Route path="/create" component={CreateProfile} />
        </Container>
      </main>
    </Router>
  );
};

export default App;
