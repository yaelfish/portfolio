import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from "@emotion/styled";

import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Projects } from './pages/Projects';
import { About } from './pages/About';

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
      <BrowserRouter basename={'/'}>
        <Navbar />
        <main>
          <Routes>
            <Route element={<HomePage/>} path={'/portfolio'} />
            <Route element={<Projects/>} path={'/portfolio/project'} />
            <Route element={<About/>} path={'/portfolio/about'} />
            <Route element={<NotFoundPage/>} path={'/not-found'} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
