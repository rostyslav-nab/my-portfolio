import React from 'react'
import './skills.scss'
import MyCloud from "./tag-cloud"

export const Skills = () => {
    return (
        <>
            <div className="col-4">
                <div className="text-zone new-format">
                    <span className="sm-top-tag text-muted">{"<body>"}</span>
                    <div className="title"><h1 id="main-effect-header">
                        Skills and <br/> Experience
                    </h1></div>
                    <p className="white">
                        The main area of my expertise is front end development (client side of the web).
                    </p>
                    <p className="white">
                        HTML, CSS, JS, building small and medium web apps with React, custom plugins, features,
                        animations and coding interactive layouts.
                    </p>
                    <p className="white">
                        I have little experience working in freelance, I am looking for work in IT company and become
                        Team Lead for 5 years.
                    </p>
                    <p className="white">English: Intermediate</p>
                    <p className="white">Ukrainian: Native</p>
                    <p className="white">Russian: Native</p>
                    <div className="btn-contact">
                        <a target="_blank" rel="noopener noreferrer"
                           href="https://drive.google.com/file/d/1Bfi3Av6nrqAUGnPl1gPEI1eqwautVAHU/view?usp=sharing">
                            <span className="text">View CV</span>
                            <span className="line -right"></span>
                            <span className="line -top"></span>
                            <span className="line -left"></span>
                            <span className="line -bottom"></span>
                        </a>
                    </div>
                    <span className="sm-bottom-tag text-muted">{"</body>"}</span>
                </div>
            </div>

            <div className="col-8 myWebCloud">
                <MyCloud/>
            </div>

        </>
    );
}
