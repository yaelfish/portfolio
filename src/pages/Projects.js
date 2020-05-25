import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "@emotion/styled";

const ProjectsStyle = styled("section")`
    background: ${props => props.theme.cards.background};
    color: ${props => props.theme.footer.text};
    padding-top: 10vh;
    padding-bottom: 10vh;
    a {
        color: ${props => props.theme.footer.text};
    }
    h3 {
        font-size: 2.4rem;
        font-weight: 600;
        padding: 1rem;
        line-height: unset;
    }
    h5 {
        font-weight: bold;
    }
    figure {
        width: fit-content;
        video {
            width: 100%;
        }
    }
    .card-body {
        max-width: 600px;
        margin: auto;
        font-size: 1.2rem;
    }
    article {
        border: ${props => props.theme.card.border};
        background: ${props => props.theme.card.bg};
        overflow: hidden;
        
        mark {
            background-color: ${props => props.theme.article.mark};
            color: ${props => props.theme.article.color};
        }
    }
`;

export const Projects = props => {

    const [demoOn, toggleDemoOn] = useState(false);
    return (
        <ProjectsStyle>
            <div className="container">
                
                <section className="card-body">
                    <h3 className="card-title">
                        Early Bird - Art Marketplace
                    </h3>
                    <div className="card-body">
                        <h5>Goal:</h5>
                        <p className="card-text">
                            An art marketplace for users to sell and buy exlusive artworks.
                            The user can browse artworks or artists by name or keyword, view a mock of the artwork framed or hanging on the wall as a buyer or view his sales statistics as a seller.
                        </p>
                        <h5>Technology:</h5>
                        <p className="card-text">
                            React, Redux, node.js, mongoDB, SASS, Pictures stored in Cloudinary.
                        </p>
                        <h5>Planning to improve:</h5>
                        <details>
                            <summary>
                                To-dos for this project
                            </summary>
                            <ul>
                                <li>
                                    Update footer & about
                                </li>
                                <li>
                                    Add option for sharing
                                </li>
                                <li>
                                    Finish websockets for commenting & likes
                                </li>
                                <li>
                                    Finish user registration (at the momemt only visible in guest mode or with users I pre-created)
                                </li>
                            </ul>
                        </details>
                        <hr></hr>
                    </div>
                    <footer className="card-footer flex justify-between">
                        <button onClick={() => toggleDemoOn(!demoOn)}>
                            {demoOn ? 'Close Demo' : 'Watch Demo'}
                        </button>
                        <a href="https://early-bird-app-gallery.herokuapp.com/" target="_blank" rel="noopener noreferrer">See in action</a>
                    </footer>
                    {demoOn && <figure className="flex justify-center">
                        <video controls controlsList="nodownload" src="https://res.cloudinary.com/dehbor36y/video/upload/v1589898728/2020-05-19_17-19-25_poy8am.mp4" alt="preview" />
                    </figure>}
                </section>
                
                <section className="card-body">
                    <h3 className="card-title">Porfolio</h3>
                    <div className="card-body">
                        <h5>Goal:</h5>
                        <p className="card-text">
                            A portfolio with a functional dark mode to present myself and showcase personal projects.
                        </p>
                        <h5>Technology:</h5>
                        <p className="card-text">
                            React, Emotion themes, contexts, hooks, local storage
                        </p>
                         <h5>Planning to improve:</h5>
                        <details>
                            <summary>
                                To-dos for this project
                            </summary>
                            <ul>
                                <li>
                                    Add A tech blog 
                                </li>
                            </ul>
                        </details>
                    </div>
                    <footer className="card-footer flex justify-end">
                        <Link to="/">See in action</Link>
                    </footer>
                </section>
               
                <section className="card-body">
                    <h3 className="card-title">React Meme Generator</h3>
                    <div className="card-body">
                        <h5>Goal:</h5>
                        <p className="card-text">
                            A fast online meme generator to practice React hooks.
                        </p>
                        <h5>Technology:</h5>
                        <p className="card-text">
                            React, hooks, custom hooks, routes
                        </p>
                        <h5>Planning to improve:</h5>
                        <details>
                            <summary>
                                To-dos for this project
                            </summary>
                            <ul>
                                <li>
                                    Update footer
                                </li>
                                <li>
                                    Lazy load pictures
                                </li>
                                <li>
                                    Share option
                                </li>
                                <li>
                                    Upload user's image
                                </li>
                                <li>
                                    Finish mobile friendliness
                                </li>
                                <li>
                                    Add Favicon
                                </li>
                                <li>
                                    Fix Carouselle edges
                                </li>
                                <li>
                                    Store images
                                </li>
                            </ul>
                        </details>
                    </div>
                    <footer className="card-footer flex justify-end">
                        <a href="https://yaelfish.github.io/meme-generator-react/" target="_blank" rel="noopener noreferrer">See in action</a>
                    </footer>
                </section>
                
                <section className="card-body">
                    <h3 className="card-title">Vanilla Meme Generator</h3>
                    <div className="card-body">
                        <h5>Goal:</h5>
                        <p className="card-text">
                            A responsive, fast, mobile-friendly online meme generator
                        </p>
                        <h5>Technology:</h5>
                        <p className="card-text">
                            vanilla JavaScript, CSS grid layout, HTML5 canvas, MVC
                        </p>
                        <h5>Planning to improve:</h5>
                        <details>
                            <summary>
                                To-dos for this project
                            </summary>
                            <ul>
                                <li>
                                    Update footer
                                </li>
                                <li>
                                    Share option
                                </li>
                                <li>
                                    Upload user's image
                                </li>
                                <li>
                                    Fix About
                                </li>
                                <li>
                                    Add Favicon
                                </li>
                            </ul>
                        </details>
                    </div>
                    <footer className="card-footer flex justify-end">
                        <a href="https://yaelfish.github.io/meme-generator/" target="_blank" rel="noopener noreferrer">See in action</a>
                    </footer>
                </section>
            </div>
        </ProjectsStyle>
    )
}

