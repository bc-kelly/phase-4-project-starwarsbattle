import React from "react";
import CharacterCard from "./CharacterCard";
import "./YourBattleChars.css"

function YourBattleChars({battleChars, setBattleChars}) {

    const showBatCharacters = battleChars.map((batChar) => {
        return (
            <CharacterCard 
            key={batChar.id} 
            character={batChar}
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
        </div>
      );
}

export default YourBattleChars;