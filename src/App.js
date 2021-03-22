import React from "react";
import "./styles.css";
// import data from "./components/data/data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TransactionLanding from "./components/pages/TransactionLanding/TransactionLanding";
import InvoicesLanding from "./components/pages/InvoicesLanding/InvoicesLanding";
import { Anchor, Grommet, Header, Nav, Box, Text } from "grommet";
import { useHistory } from "react-router-dom";

import { grommet } from "grommet/themes";

export default function App() {
  // console.log("data", data);
  let history = useHistory();

  const handleClick = (path) => {
    console.log("history", history);
    history.push(path);
  };

  return (
    <Router>
      <div className="App">
        <Grommet theme={grommet}>
          <Header background="dark-1" pad="medium">
            <Nav direction="row">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/summary">Summary</Link>
              </li>
              <li>
                <Link to="/invoices">Invoices</Link>
              </li>
              <Anchor label="Home" onClick={() => handleClick("/")} />
              <Anchor label="Summary" onClick={() => handleClick("summary")} />
              <Anchor
                label="Invoices"
                onClick={() => handleClick("invoices")}
              />
            </Nav>
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
          </Header>
        </Grommet>
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
