import React, {useEffect, useState } from "react";
import CharacterCollection from "./CharacterCollection";

const charactersAPI = 'http://localhost:4000/characters';

function MainPage(){

    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        fetch(charactersAPI)
        .then(response => response.json())
        .then(charactersData => {
          console.log(charactersData)
          setCharacters(charactersData)
        })
      }, [])

    return (
        <div>
          <CharacterCollection  characters={characters} />
        </div>
      )

    
}
    
export default MainPage;