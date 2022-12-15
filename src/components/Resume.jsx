import React from "react"

const Resume = () => {
    return (
        <div className="resumeContainer">
            <div id="resumeHeader">
                <div> profile pic </div>
                <h2> CHARLES VALDEZ </h2>
                <div>
                    <span>
                        <ul>
                            <li> Software Engineer </li>
                            <li>Chicago, IL 60607, United States </li>
                            <li> 847-609-6304 </li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="resumePortion">
                <h2> Profile </h2>
                <div className="portionDescription">
                    I am an entry-level software engineer with knowledge in languages such as CSS, HTML, React and Javascript. 
                </div>
            </div>
            <div className="resumePortion">
                <h2> Education </h2>
                <div className="portionDescription">
                    <p> University of Illinois at Chicago, IL</p>
                    <p>Fullstack Academy Certificate in Web Development <span> Dec 2022</span></p>
                    <p> Bachelor of Science in Kinesiology <span> May 2018 </span></p>
                </div>
            </div>
            <div className="resumePortion">
                <h2> Experience </h2>
                <div className="portionDescription">
                    <div> 
                        Software Developer 2022-Current Day
                     <ul>
                    <li> Fullstack Academy Bootcamp Projects</li>
                    <li> Websites created using javascript and deployed through Netlify</li>
                    </ul>
                    </div> 
                </div>
            </div>
            <div className="resumePortion">
                <h2> Skills </h2>
                <div className="portionDescription">
                    <p> Frontend: Javascript, React, HTML, CSS, NPM </p>
                    <p> Backened: Node.js, Javascript </p>
                </div>
            </div>
        </div>

    )
}

export default Resume