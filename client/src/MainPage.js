import React, {useEffect, useState } from "react";
import CharacterCollection from "./CharacterCollection";
import YourBattleChars from "./YourBattleChars";

const charactersAPI = 'http://localhost:4000/characters';
const planetsAPI = 'http://localhost:4000/planets'

function MainPage(){

    const [characters, setCharacters] = useState([])
    const [planets, setPlanets] = useState([])
    const [battleChars, setBattleChars] = useState([])

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
      
      function handleAddToBattleChars(item) {
        if (!battleChars.includes(item)) {
          setBattleChars([...battleChars, item])
        }
        if (battleChars.length === 2) {
          setBattleChars([...battleChars])
        }
      }
      //if length of battle chars is equal to two, dont add any more

    return (
        <div>
          <CharacterCollection  characters={characters} planets={planets} handleAddToBattleChars={handleAddToBattleChars}/>
          <YourBattleChars battleChars={battleChars} setBattleChars={setBattleChars}/>
        </div>
      )
}
    
export default MainPage;