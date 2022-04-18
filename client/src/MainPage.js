import React, {useEffect, useState } from "react";
import CharacterCollection from "./CharacterCollection";

const charactersAPI = 'http://localhost:4000/characters';
const planetsAPI = 'http://localhost:4000/planets'

function MainPage(){

    const [characters, setCharacters] = useState([])
    const [planets, setPlanets] = useState([])

    useEffect(()=>{
        fetch(charactersAPI)
        .then(response => response.json())
        .then(charactersData => {
          console.log(charactersData)
          setCharacters(charactersData)
        })
      }, [])

      useEffect(()=>{
        fetch(planetsAPI)
        .then(response => response.json())
        .then(planetsData => {
          console.log(planetsData)
          setPlanets(planetsData)
        })
      }, [])      

    return (
        <div>
          <CharacterCollection  characters={characters} planets={planets}/>
        </div>
      )

    
}
    
export default MainPage;