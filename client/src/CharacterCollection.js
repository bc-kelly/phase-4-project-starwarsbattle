import React from "react";
import CharacterCard from './CharacterCard'
import PlanetCard from "./PlanetCard"
import "./CharacterCollection.css"

function CharacterCollection( { characters, planets, handleAddToBattleChars, handleAddPlanetToBattle }) {

    const characterCard = characters.map(character => {
        console.log(character)
        return <CharacterCard key={character.id} character={character} onCardClick={handleAddToBattleChars} />

    })

    const planetCard = planets.map(planet => {
        return <PlanetCard key={planet.id} planet={planet} onCardClick={handleAddPlanetToBattle} />
    })

    return (
        <div>
            <div className="character-title">
                <h3>Choose Your Characters (2) </h3>
            </div>
            <div className="characterCollection">
                {characterCard}
            </div>
            <div className="character-title">
                <h3>Choose your Battle Planet</h3>
            </div>
            <div className="characterCollection">
                {planetCard}
            </div>
        </div>
       
    )


}

export default CharacterCollection;