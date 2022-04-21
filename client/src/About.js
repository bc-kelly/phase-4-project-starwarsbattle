import React from "react";
import './About.css';

function About(){
    return (
    <div>
        {/* <div className="about">
            <h1>About the game:</h1>
        </div> */}
        <div className="wrapper">
            <div className="scroll-text">
                <h1>Welcome to Battle of the Known Universe</h1>
                <p>This intergalatic game of rock, paper, scissors will determine your character's fate.</p>
                {/* <p>First: Head over the to the Login/Sign Up to create your account.</p> */}
                <p>Click on two characters for battle. If you change your mind, click on them from the Battle Station to remove them.</p>
                <p>If you wish, add a character of your choosing. Yes, hrrmmm.</p>
                <p>Next: Choose one planet that will host the battle.</p>
                <p>Your arsenal of weapons includes: Lightning, a Light Saber, and the Force.</p>
                <p>Your weapon will be randomly assigned to you upon clicking the Random Weapon button.</p>
                <p>Here are the rules: Lightning beats Light Saber, Light Saber beats the Force, and the Force beats Lightning.</p>
                <p>It all comes down to the weapon selected for you, so don't underestimate any characters.</p>
                <p>About luck the game is not, but about destiny.</p>
            </div>
        </div>
    </div>
    );
}



export default About;