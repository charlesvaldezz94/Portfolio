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
                    <p> One of my very first projects I attempted in Javascript was a simple coin counting game. Check it out by clicking the picture! This project was intended as an introduction to "if" funcitons and event listeners in Javascript. It was also good practice in creating a counter that added a number per second. </p>
                </div>
                <p> 
                    <span> 
                    Languages Used: 
                    HTML, <img className="languageLogo" src="/images/html.png" alt="html logo" /> 
                    CSS, <img className="languageLogo" src="/images/CSS.png" alt="CSS logo" />
                    Javascript <img className="languageLogo" src="/images/JS.png" alt="JS logo" />
                    </span>
                    </p>
            </div>


            <div className="projectSquares">
                <div className="projectPicture">
                    <a target="_blank" href="https://shiny-paprenjak-9865d2.netlify.app"><img className="projectPic" src={"/images/Snake.png"} alt="snakeGame"/></a>
                </div>
                <div className="projectDescription">
                    <h3> Snake </h3>
                    <p> An attempt on a well-known mobile game using Javascript. On this project I familiarized myself with creating Javascript nested functions, functions for binding keyboard keys with event listeners and, "for" loops. You can find the finished product by clicking on the picture above!
                    </p>
                </div>
                <p> 
                    <span> 
                    Languages Used: 
                    HTML, <img className="languageLogo" src="/images/html.png" alt="html logo" /> 
                    CSS, <img className="languageLogo" src="/images/CSS.png" alt="CSS logo" />
                    Javascript <img className="languageLogo" src="/images/JS.png" alt="JS logo" />
                    </span>
                    </p>
            </div>


            <div className="projectSquares">
                <div className="projectPicture">
                <a target="_blank" href="https://wonderful-florentine-a89ba2.netlify.app"><img className="projectPic" src={"/images/PuppyBowl.png"} alt="PuppBowl"/></a>
                </div>
                <div className="projectDescription">
                <h3> Puppy Bowl </h3>
                    <p> An introduction into utilizing react in order to create a search bar that can identify specific dog names. I also learned how to set UseStates and pass down information to different component files as props. 
                    </p>
                </div>
                <p> 
                    <span> 
                    Languages Used: 
                    HTML, <img className="languageLogo" src="/images/html.png" alt="html logo" /> 
                    CSS, <img className="languageLogo" src="/images/CSS.png" alt="CSS logo" />
                    Javascript / React <img className="languageLogo" src="/images/JS.png" alt="JS logo" />
                    </span>
                    </p>
            </div>


            <div className="projectSquares">
                <div className="projectPicture">
                    <a target="_blank" href="https://github.com/charlesvaldezz94/FitnessTracker"><img className="projectPic" src={"/images/FitnessTracker.png"} alt="FitnessApp"/></a>
                </div>
                <div className="projectDescription">
                <h3> Fitness Tracker </h3>
                    <p> For this project I was part of a group that created both a backend database and utilized it in the front end to output a simple fitness tracking website.  
                    </p>
                </div>
                <p> 
                    <span> 
                    Languages Used: 
                    HTML, <img className="languageLogo" src="/images/html.png" alt="html logo" /> 
                    CSS, <img className="languageLogo" src="/images/CSS.png" alt="CSS logo" />
                    Javascript <img className="languageLogo" src="/images/JS.png" alt="JS logo" />
                    </span>
                    </p>
            </div>


            <div className="projectSquares">
                <div className="projectPicture">
                    project image
                </div>
                <div className="projectDescription">
                    <h3> Pokedex </h3>
                        <p>
                            This is a work in progress, I am working on a functional pokedex.
                        </p>
                </div>
                <p> 
                    <span> 
                    Languages Used: 
                    HTML, <img className="languageLogo" src="/images/html.png" alt="html logo" /> 
                    CSS, <img className="languageLogo" src="/images/CSS.png" alt="CSS logo" />
                    Javascript <img className="languageLogo" src="/images/JS.png" alt="JS logo" />
                    </span>
                    </p>
            </div>


        </div>
        </div>

    )
}

export default Projects