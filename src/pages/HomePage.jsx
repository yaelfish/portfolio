import React from 'react';
import { Link } from 'react-router-dom';
import girl from '../assets/images/girl.png';

export const HomePage = () => {
    return (
        <div className="App">
            <header className="App-header flex justify-center align-center">
                <img src={girl} className="girl" alt="girl" />
                <aside className="welcome-text">
                    <h1>
                        Hi, I'm Yael.<br></br>
                        I'm a Tel Aviv based <Link to="/about" className="nikita">full-stack developer</Link> passionate about crafting seamless user experiences with JavaScript.  
                        {/* I turn complex problems into elegant products. */}
                    </h1>
                    <Link to="/portfolio/project">
                        → View my projects
                    </Link>
                </aside>
            </header>
        </div>
    )
}
