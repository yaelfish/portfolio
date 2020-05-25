import React from 'react';
import styled from "@emotion/styled";
import me from '../assets/images/me.jpg';
import nikita from '../assets/images/nikita.jpg';

const Article = styled("section")`
section {
     
    figure {
        border: ${props => props.theme.article.imgBorder};
        box-shadow: ${props => props.theme.article.boxShadow};
    }
        
    article {
        background: ${props => props.theme.article.background};
        color:  ${props => props.theme.article.color};

        mark {
            background-color: ${props => props.theme.article.mark};
            color: ${props => props.theme.article.color};
        }
        a {
        color: ${props => props.theme.footer.text};
        }
    }
}
`;

export const About = () => {
    return (
        <Article>
            <section className="about-container flex justify-around align-end">
                <div className="about-me flex column">
                    <>
                        <figure className="about-pics-container flex justify-center">
                            <img className="me" src={me} alt="me" />
                        </figure>
                        <article className="about-text-yael">
                            <h2>About Yael</h2>
                            <hr></hr>

                            <div>
                                <i>Already Skilled with:</i> <mark>JavaScript</mark>, <mark>React</mark>, Redux, Hooks, SASS, Styled Components, CSS3, Typescript, Node.js, PHP, SQL & ready to learn much more.
                            </div>
                            <hr></hr>
                            <div>
                                <p>
                                    Hi!<span role="img" aria-label="hi">👋</span><br></br>  
                                </p>
                                <p>
                                    My Formal education is in the fields of Psychology and Media & Communication studies. I discovered programming by coincidence, and ever since I'm hooked.
                                </p>
                                <p>
                                    My First programming experience was with Java, since my journey began in an Android App Development course. After that course I joined <a href="https://she-codes.org/" target="_blank" rel="noopener noreferrer"><mark>She Codes;</mark></a> organization as a student in their web course, and this is where I fell inlove with web development.
                                </p>
                                <p>
                                    I found my first entry level position at K Logic and simultaneously started to give back to the community by volunteering at <mark>She codes;</mark> as a Web Track Coordinator for a year and then as a Branch manager.
                                </p>
                                <p>
                                    I'm an enthusiastic coder, a <mark>creative</mark> and curious person who strives to always keep learning and growing both as a coder and as a human being.
                                    I'm a highly motivated self learner who is a hard working and a positive person. <mark>I like to tackle problems and appreciate debugging</mark>. 
                                    Among some of my interests and/or hobbies you can find things like art, patterns, collage, psychology, travelling, music, Twin Peaks, documentaries, classy films, Trashy films and coding. 
                                </p>
                            </div>
                            <hr></hr>    
                            <div className="about-pics-container flex justify-center align-center">
                                <p>Proud parent to <mark>Nikita</mark>, a gentle, kind and happy ginger dog.</p>
                                <img className="nikita contrast" src={nikita} alt="nikita" />
                            </div>
                            <hr className="contact-separator"></hr>
                            <h3>Want to get in touch? Write me at mailing.yael[at]gmail.com </h3>
                        </article>
                    </>
                </div>
            </section>
        </Article>
    )
}
