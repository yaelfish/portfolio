import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import girl from '../assets/images/girl.png';

export const HomePage = () => {
    return (
        <div className="App">
            <header className="App-header flex justify-center align-center">
                <img src={girl} className="girl" alt="girl" />
                <aside className="welcome-text">
                    <h1>
                        Hi, I'm Yael.<br></br>
                        I'm a Tel Aviv based <Link to="/about" className="nikita">Full-Stack developer</Link> & JavaScript enthusiast
                        , happily coding at 
                        <a href="https://www.gettacar.com/" target="_blank" rel="noopener noreferrer"> gettacar</a>
                    </h1>
                    <Link to="/portfolio/project">
                        See What else I've been working on
                    </Link>
                </aside>
            </header>
        </div>
    )
}
