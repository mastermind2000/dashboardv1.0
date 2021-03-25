import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact/ContactPage";
import UserForm from "./pages/UserForm";
import sauvegarde from "./pages/Usage/sauvegarde";
import "./index.css";

const App = () => (
  <div>
    <Nav />
    <div className="container">
      <Route exact={true} path="/" component={Home} />
      <Route exaxt path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/userForm" component={UserForm} />
      <Route exact path="/sauvegarde" component={sauvegarde} />
    </div>
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
