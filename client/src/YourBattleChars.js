import React from "react";
import CharacterCard from "./CharacterCard";

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
            {showBatCharacters}
          
        </div>
      );
}

export default YourBattleChars;