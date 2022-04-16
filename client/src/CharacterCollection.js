import React from "react";
import CharacterCard from './CharacterCard'
import "./CharacterCollection.css"

function CharacterCollection( { characters }) {

    const characterCard = characters.map(character => {
        return <CharacterCard key={character.id} character={character} />
    })

    return (
        
        <div className="characterCollection">
            {characterCard}
        </div>
    )


}

export default CharacterCollection;