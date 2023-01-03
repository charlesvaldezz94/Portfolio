import React, { useState } from "react"
import Popup from "reactjs-popup"

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
                <div className="homeColumn">
                    <div className="homeColumnLeft">
                    <h2> Hello! I'm Charles </h2>
                    <p> I'm an entry level fullstack developer with knowledge in HTML, CSS, Javascript, and React. Checkout my recent projects and resume here on this site!</p> 
                    <div className="aboutMeButton">
                        <Popup  trigger={<button id="aboutMe"> About Me </button>}>
                        <div className="aboutMePopup">
                            I have completed a bachelors of science majoring in kinesiology at UIC, and I have worked as a certified Occupational Therapy Assistant. 
                            </div>
                            <div className="aboutMePopup">
                                I have always loved playing with computers and video games. Those hobbies are what sparked my interest in web development. I hope to continue learning about different code languages such as C Sharp in order to one day code my own video game.
                            </div>
                            </Popup> 
                    </div>
                    </div>
                </div>
                <div className="homeColumn">
                    <img id="profilePic" src="/images/IMG-3812.jpg" alt="ProfilePic" />
                </div>
            </div>
        </div>

    )
}

export default Home