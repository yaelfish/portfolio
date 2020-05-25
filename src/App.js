import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from "@emotion/styled";

import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Projects } from './pages/Projects';
import { About } from './pages/About';

const history = createBrowserHistory();

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  -webkit-tap-highlight-color:  ${props => props.theme.highlight}; 

  aside {
    background: ${props => props.theme.aside.background};
    box-shadow: ${props => props.theme.aside.boxShadow};
  }
  h1 {
    color: ${props => props.theme.text.active};
  }
  header {
    background: ${props => props.theme.header};
  }
`;

function App() {

  return (
    <Wrapper>
      <Router history={history}>
        <Navbar />
        <main>
          <Switch>
            <Route exact component={HomePage} path="/" />
            <Route exact component={Projects} path="/project" />
            <Route exact component={About} path="/about" />
            <Route component={NotFoundPage} path="/" />
          </Switch>
        </main>
        <Footer />
      </Router>
    </Wrapper>
  );
}

export default App;
