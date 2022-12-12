import React from "react"

const Projects = () => {
    return (
        <div className="projectsHeader">
            <h2>Projects </h2>

        <div className="projectSquaresContainer">


            <div className="projectSquares">
                <div className="projectPicture">
                   <a target="_blank" href="https://gleeful-kitsune-d05a58.netlify.app"><img className="projectPic" src={"/images/coin.png"} alt="coin"/></a> 
                </div>
                <div className="projectDescription">
                    <h3> Coin Counter </h3>
                    <p> One of my very first projects I attempted in javascript was a simple coin counting game. Check it out by clicking the picture! This project was intended as an introduction to "if" funcitons and event listeners in javascript. It was also good practice in creating a counter that added a number per second. </p>
                </div>
                <p> 
                    <span> 
                    Languages Used: 
                    HTML, <img className="languageLogo" src="/images/html.png" alt="html logo" /> 
                    CSS, <img className="languageLogo" src="/images/CSS.png" alt="CSS logo" />
                    javascript <img className="languageLogo" src="/images/JS.png" alt="JS logo" />
                    </span>
                    </p>
            </div>


            <div className="projectSquares">
                <div className="projectPicture">
                    <a target="_blank" href="https://shiny-paprenjak-9865d2.netlify.app"><img className="projectPic" src={"/images/Snake.png"} alt="snakeGame"/></a>
                </div>
                <div className="projectDescription">
                    <h3> Snake </h3>
                    <p> An attempt on a well-known mobile game using javascript. On this project I familiarized myself with creating javascript nested functions, functions for binding keyboard keys with event listeners and, "for" loops. You can find the finished product by clicking on the picture above!   </p>
                </div>
                <p> 
                    <span> 
                    Languages Used: 
                    HTML, <img className="languageLogo" src="/images/html.png" alt="html logo" /> 
                    CSS, <img className="languageLogo" src="/images/CSS.png" alt="CSS logo" />
                    javascript <img className="languageLogo" src="/images/JS.png" alt="JS logo" />
                    </span>
                    </p>
            </div>


            <div className="projectSquares">
                <div className="projectPicture">
                    project image
                </div>
                <div className="projectDescription">
                    description of project
                </div>
                <p> 
                    <span> 
                    Languages Used: 
                    HTML, <img className="languageLogo" src="/images/html.png" alt="html logo" /> 
                    CSS, <img className="languageLogo" src="/images/CSS.png" alt="CSS logo" />
                    javascript <img className="languageLogo" src="/images/JS.png" alt="JS logo" />
                    </span>
                    </p>
            </div>


            <div className="projectSquares">
                <div className="projectPicture">
                    project image
                </div>
                <div className="projectDescription">
                    description of project
                </div>
                <p> 
                    <span> 
                    Languages Used: 
                    HTML, <img className="languageLogo" src="/images/html.png" alt="html logo" /> 
                    CSS, <img className="languageLogo" src="/images/CSS.png" alt="CSS logo" />
                    javascript <img className="languageLogo" src="/images/JS.png" alt="JS logo" />
                    </span>
                    </p>
            </div>


            <div className="projectSquares">
                <div className="projectPicture">
                    project image
                </div>
                <div className="projectDescription">
                    description of project
                </div>
                <p> 
                    <span> 
                    Languages Used: 
                    HTML, <img className="languageLogo" src="/images/html.png" alt="html logo" /> 
                    CSS, <img className="languageLogo" src="/images/CSS.png" alt="CSS logo" />
                    javascript <img className="languageLogo" src="/images/JS.png" alt="JS logo" />
                    </span>
                    </p>
            </div>


        </div>
        </div>

    )
}

export default Projects