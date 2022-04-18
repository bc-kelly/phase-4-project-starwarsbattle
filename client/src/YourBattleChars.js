import React from "react";
import CharacterCard from "./CharacterCard";
import PlanetCard from "./PlanetCard";
import "./YourBattleChars.css"

function YourBattleChars({battleChars, setBattleChars, battlePlanets}) {

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
  

    return (
        <div>
            <div className="character-title">
                <h3>Battle Characters</h3>
            </div>
            <div className="batCharContainer">
                {showBatCharacters}
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