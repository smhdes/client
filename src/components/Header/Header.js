import React from "react";
import "./Header.css";
import FeedBack from "../FeedBack/FeedBack";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";

import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

const header = (props) => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/feedback">FeedBack</Link>
        </li>
        <li>
          <Link to="/">Main Page</Link>
        </li>
      </ul>
    </nav>
    {/* <Home />
      <FeedBack /> */}
    <Switch>
      <Route path="/feedback" exact component={FeedBack}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/" component={Layout}></Route>
    </Switch>
  </Router>
);

export default header;
