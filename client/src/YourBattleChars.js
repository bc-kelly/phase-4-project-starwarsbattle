import React from "react";
import CharacterCard from "./CharacterCard";
import PlanetCard from "./PlanetCard";
import "./YourBattleChars.css"

function YourBattleChars({battleChars, setBattleChars, battlePlanets, characters}) {

    const showBatCharacters = battleChars.map((batChar) => {
        return (
            <CharacterCard 
            key={batChar.id} 
            character={batChar}
            />
           
        )
    })
    const showBatPlanets = battlePlanets.map((batPlanet) => {
        return (
            <PlanetCard 
            key={batPlanet.id} 
            planet={batPlanet}
            />
        )
    })
  
    // const weapon = characters.map((character) => {
    //     return 
    // })

    return (
        <div>
            <div className="character-title">
                <h3>Get Ready to Battle</h3>
            </div>
            <div className="batCharContainer">
                {showBatCharacters}
            </div> 
            
            <div className="weapon-text-container">
                <div className="weapon-div-one">
                    <p className="weapon-text">here are the weapons</p>
                    <button> RANDOM WEAPON </button>
                </div>
                <div className="weapon-div-two">
                    <p className="weapon-text">here are the weapons</p>
                    <button> RANDOM WEAPON </button>
                </div>
            </div>
            <div className="batPlanetContainer">
                <div className="batPlanet">
                {showBatPlanets}
                </div>
            </div>
        </div>
      );
}

export default YourBattleChars;