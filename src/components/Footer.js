import React from 'react';
import styled from "@emotion/styled";
import { useTheme } from "../ThemeContext";
import lightCode from '../assets/images/code.svg';
import darkCode from '../assets/images/code-white.svg';
import lightGit from '../assets/images/github.svg';
import darkGit from '../assets/images/github-white.svg';
import lightLinkedin from '../assets/images/linkedin.svg';
import darkLinkedin from '../assets/images/linkedin-white.svg';

const FooterStyle = styled("footer")`
  background: ${props => props.theme.footer.background};
  color: ${props => props.theme.footer.text};
  display: flex;
  justify-content: space-around;
  align-items: center;
  figure {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        margin-left: 10px;
    }
  }
`;

export const Footer = () => {
    const themeState = useTheme();
    return (
        <FooterStyle>
            <p className="flex justify-center align-center">
                Built with &nbsp; {themeState.dark ? <img className="code" src={darkCode} alt="code" /> : <img className="code" src={lightCode} alt="code" />} &nbsp; &amp; &nbsp; {themeState.dark ? "🤍" : "🖤"} &nbsp; by Yael Fisher
            </p>
            <figure>
                <a href="https://github.com/yaelfish" target="_blank" rel="noopener noreferrer">
                    {themeState.dark ? <img className="code" src={darkGit} alt="github" /> : <img className="code" src={lightGit} alt="github" />}
                </a>
                <a href="https://www.linkedin.com/in/yael-fisher/" target="_blank" rel="noopener noreferrer">
                    {themeState.dark ? <img className="code" src={darkLinkedin} alt="linkedin" /> : <img className="code" src={lightLinkedin} alt="linkedin" />}
                </a>

            </figure>
        </FooterStyle>
    )
}
