import React from "react";
import "./CharacterCard.css"

function CharacterCard( { character, onCardClick }){
    console.log(character)

    return (
        <div className="characterCard"  onClick={()=>onCardClick(character)}>
            <img src={character.image} alt={character.name} />
            <h3> Name: {character.name} </h3>
            <h3> Movie: {character.movie} </h3>
        </div>
    )

}

export default CharacterCard;