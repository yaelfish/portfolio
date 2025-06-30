import React from 'react';
import styled from "@emotion/styled";
import me from '../assets/images/me.jpg';
import dog from '../assets/images/negev-tzippi.jpeg';

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

                            <section>
                                <i>Already Skilled with:</i> <mark>JavaScript</mark>, <mark>TypeScript</mark>, <mark>React</mark> (Redux, Hooks, and state-management patterns), SASS, Styled Components, CSS3, SCSS, Node.js, <mark>NestJS</mark>, PostgreSQL, SQL, NoSQL and more.
                            </section>
                            <hr></hr>
                            <section>
                                <p>
                                    Hi!<span role="img" aria-label="hi">👋</span><br></br>  
                                </p>
                                <p>
                                    My formal education is in the fields of Psychology and Media & Communication studies. I discovered programming by coincidence, and ever since, I'm hooked 🥁. 
                                </p>
                                <p>
                                    My first programming experience was with Java, since my journey began in an Android App Development course. After that course, I joined <mark>She Codes;</mark> Organization as a student in their web course, and this is where I fell in love with web development.
                                </p>
                                <p>
                                    I found my first entry-level position at <a href='https://www.k.co.il/' target="_blank" rel="noopener noreferrer"><mark>K Logic</mark></a> and simultaneously started to give back to the community by volunteering at <mark>She Codes;</mark> as a Web Track Coordinator for a year and then as the Amazon Branch manager for three more years. I also wrote their React course curriculum and taught it to hundreds of students.
                                </p>
                                <p>
                                    I enjoy sharing technical knowledge through writing as well - you can read my article on Learning about <a href='https://medium.com/@yaelfisher/learning-about-time-complexity-with-javascript-arrays-methods-b8c2a8ee2101' target="_blank" rel="noopener noreferrer"><mark>Time Complexity with Javascript Array Methods</mark></a> published on Medium."
                                </p>
                                <p>
                                    I have worked as a full-stack developer at <a href='https://www.gettacar.com/' target="_blank" rel="noopener noreferrer"><mark>Gettacar</mark></a> for a couple of years, and then at <a href='https://www.outbrain.com/' target="_blank" rel="noopener noreferrer"><mark>Outbrain</mark></a> for another 2.5 years.
                                </p>
                                <hr></hr>    
                                <p>
                                    I'm an enthusiastic coder, a <mark>creative</mark> and curious person who strives to always keep learning and growing both as a coder and as a human being. <mark>I like to tackle problems and appreciate debugging.</mark>
                                    <hr></hr> 
                                    Among some of my interests and/or hobbies you can find things like art, patterns, collage, psychology, traveling, music, Twin Peaks, documentaries, classy films, trashy films and coding. 
                                </p>
                            </section>
                            <hr></hr>    
                            <section className="about-pics-container flex justify-center align-center">
                                <p>Proud parent to <mark>Negev</mark> and <mark>Tzippi</mark>, a pair of wild, kind and happy baby & dog.</p>
                                <img className="dog contrast" src={dog} alt="dog and baby" />
                            </section>
                            <hr className="contact-separator"></hr>
                            <h3>Want to get in touch? Write me at mailing.yael[at]gmail.com </h3>
                        </article>
                    </>
                </div>
            </section>
        </Article>
    )
}
