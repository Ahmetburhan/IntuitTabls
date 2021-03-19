import React from "react";
import "./styles.css";
// import data from "./components/data/data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TransactionLanding from "./components/pages/TransactionLanding/TransactionLanding";
import InvoicesLanding from "./components/pages/InvoicesLanding/InvoicesLanding";

export default function App() {
  // console.log("data", data);
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/summary">Summary</Link>
            </li>
            <li>
              <Link to="/invoices">Invoices</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/summary">
            <TransactionLanding />
          </Route>
          <Route path="/invoices">
            <InvoicesLanding />
          </Route>
          <Route path="/">
            <h1> Welcome to Intuit Mini</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
