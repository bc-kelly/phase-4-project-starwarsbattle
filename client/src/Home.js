import React from "react";
import './Home.css';


function Home(){
    return (
    <div>
        {/* <div className="home">
            <h1>WELCOME TO THE BATTLE OF A LIFETIME</h1>
        </div>
        <div className="home-pic" >
            <img src = "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1562167856904-7YDUWZLI6Z6JD4PCLAHT/daisy-ridley-teases-an-epic-lightsaber-fight-scene-between-rey-and-kylo-in-star-wars-the-rise-of-skywalker-social.jpg" alt=""/>
        </div> */}
        {/* <div className="test-pic">
            <img src = "https://www.pngmart.com/files/12/Star-Wars-Kylo-Ren-Transparent-Background.png" />   
        </div> */}
        <div className="starwars-demo">
            <img src="https://cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star" /> 
            {/* <img src="https://cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars" /> */}
            <h2 className="byline" id="byline">Intergalatic Battle</h2>
            <img src="https://cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars" />
        </div>
    </div>
    );
}



export default Home;