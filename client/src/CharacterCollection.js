import React from "react";
import CharacterCard from './CharacterCard'
import PlanetCard from "./PlanetCard"
import "./CharacterCollection.css"

function CharacterCollection( { characters, planets, handleAddToBattleChars }) {

    const characterCard = characters.map(character => {
        console.log(character)
        return <CharacterCard key={character.id} character={character} onCardClick={handleAddToBattleChars} />

    })

    const planetCard = planets.map(planet => {
        return <PlanetCard key={planet.id} planet={planet} />
    })

    return (
        <div>
            <div className="characterCollection">
                {characterCard}
            </div>
            <div className="characterCollection">
                {planetCard}
            </div>
        </div>
       
    )


}

export default CharacterCollection;