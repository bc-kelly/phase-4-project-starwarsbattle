import React from "react";

function CharacterCard( { character }){

    return (
        <div className="characterCard">
            <img src={character.image} alt={character.name} />
            <h3>Name: {character.name}</h3>
            <h3>Movie: {character.movie}</h3>
        </div>
    )

}

export default CharacterCard;