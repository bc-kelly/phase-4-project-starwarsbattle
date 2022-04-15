import React, {useEffect, useState } from "react";
import CharacterCollection from "./CharacterCollection";

const charactersAPI = 'http://localhost:3000/characters';

function MainPage(){

    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        fetch(charactersAPI)
        .then(response => response.json())
        .then(charactersData => {
          // console.log(botsData)
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