import React, { useState } from "react"

const Home = () => {
    const [aboutMe, setAboutMe] = useState(false)

    const aboutMeButton = () => {
        if (aboutMe === false) {
            setAboutMe(true)
            console.log('am true')
        }
        else {
            setAboutMe(false)
            console.log('am false')
        }
    }

    return (
        <div className="homeContainer">
            <div id="homeBody">
                <div className="homeLeft">
                    <h2> Hello! I'm Charles </h2>
                    <p> I'm an entry level fullstack developer with knowledge in HTML, CSS, Javascript, and React. Checkout my recent projects and resume here on this site!</p> 
                    <div className="aboutMeButton">
                        <button id="aboutMe" onClick={aboutMeButton}> About Me </button>
                    </div>
                </div>
                <div className="homeRight">
                    image 1
                </div>
            </div>
        </div>

    )
}

export default Home