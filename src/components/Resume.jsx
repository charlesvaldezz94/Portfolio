import React from "react";

const Resume = () => {
  return (
    <div className="resumeContainer">
      <div id="resumeHeader">
        <div id="ResumePic">
          
          <img
            id="ResumeProfilePic"
            src="/images/IMG-3812.jpg"
            alt="ProfilePic"
          />
        </div>
        <div className="resumeName">
        <h2> CHARLES VALDEZ </h2>
        <div className="resumeHeaderInfo">
          <span className="list">
            <ul>
              <li> Fullstack Web Developer </li>
              <li>Chicago, IL 60607, United States </li>
              <li> 847-609-6304 </li>
            </ul>
          </span>
        </div>
        </div>
      </div>

      <div className="resumePortion">
        <h2> Profile </h2>
        <div className="portionDescription">
          I am an entry-level software engineer with knowledge in languages such
          as CSS, HTML, React and Javascript.
        </div>
      </div>

      <div className="resumePortion">
        <h2> Education </h2>
        <div className="portionDescription">
          <p> University of Illinois at Chicago, IL</p>
          <p>
            Fullstack Academy Certificate in Web Development
            <span> Dec 2022</span>
          </p>
          <p>
            
            Bachelor of Science in Kinesiology <span> May 2018 </span>
          </p>
        </div>
      </div>

      <div className="resumePortion">
        <h2> Experience </h2>
        <div className="portionDescription">
          <div>
            Software Developer 2022-Current Day
            <ul>
              <li> Fullstack Academy Bootcamp Projects</li>
              <li>
                Websites created using javascript and deployed through Netlify / AWS
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="resumePortion">
        <h2> Personal Projects </h2>
        <div className="portionDescription">
          <div>
            <span>
            Pokedex 2022
            </span>
           
            <ul>
              <li> Fetched results from pokeAPI through axios </li>
              <li> Deployed through AWS </li>
              <li> 
            <span>
              Languages Used: HTML,
              <img
                className="languageLogo"
                src="/images/html.png"
                alt="html logo"
              />
              CSS,
              <img
                className="languageLogo"
                src="/images/CSS.png"
                alt="CSS logo"
              />
              Javascript
              <img
                className="languageLogo"
                src="/images/JS.png"
                alt="JS logo"
              />
            </span>
          </li>
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
  );
};

export default Resume;
