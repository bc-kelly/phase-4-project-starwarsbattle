import React from "react";
import CharacterCard from './CharacterCard'
import PlanetCard from "./PlanetCard"
import "./CharacterCollection.css"

function CharacterCollection( { characters, planets }) {

    const characterCard = characters.map(character => {
        return <CharacterCard key={character.id} character={character} />
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