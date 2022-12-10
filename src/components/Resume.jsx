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
                    I am an entry-level software engineer with knowledge in languages such as CSS, HTML, and javascript. 
                </div>
                <p> date </p>
            </div>
            <div className="resumePortion">
                <h2> Education </h2>
                <div className="portionDescription">
                    description
                </div>
                <p> date </p>
            </div>
            <div className="resumePortion">
                <h2> Projects and Experience </h2>
                <div className="portionDescription">
                    description
                </div>
                <p> date </p>
            </div>
            <div className="resumePortion">
                <h2> Skills </h2>
                <div className="portionDescription">
                    description
                </div>
                <p> date </p>
            </div>
        </div>

    )
}

export default Resume