import React from "react";
import { Link } from 'react-router-dom';
import styled from "@emotion/styled";

const Section = styled("section")`
    section {
      background-color: ${props => props.theme.blogPost.background};
      color: ${props => props.theme.blogPost.color};
    a {
      color: ${props => props.theme.blogPost.color};
    }
    h1, p {
      color: ${props => props.theme.blogPost.color};
    }
  }
`;

export const NotFoundPage = () => (
  <Section>
    <section className="container not-found-container flex column">
      <h1>THIS PAGE IS A GHOST <br></br>
        <Link to="/" className="marked">404</Link> NOT FOUND</h1>
      <img src="https://i.imgur.com/QIxIKBH.png" alt="ghost" className="ghost" />
      <p>You just hit a route that doesn&#39;t exist</p>
    </section>
  </Section>
)

