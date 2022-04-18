import React, {useEffect, useState } from "react";
import CharacterCollection from "./CharacterCollection";
import YourBattleChars from "./YourBattleChars";
import NewCharacterForm from "./NewCharacterForm";

const charactersAPI = 'http://localhost:4000/characters';
const planetsAPI = 'http://localhost:4000/planets'

function MainPage(){

    const [characters, setCharacters] = useState([])
    const [planets, setPlanets] = useState([])
    const [battlePlanets, setBattlePlanets] = useState([])
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

      function handleAddPlanetToBattle(item) {
        if (!battlePlanets.includes(item)) {
          setBattlePlanets([...battlePlanets, item])
        }
        if (battlePlanets.length === 1) {
          setBattlePlanets([...battlePlanets])
        }
      }

      function handleNewCharacter(character){
        fetch(charactersAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(character),
        })
        .then(response => response.json())
        .then(json => {
        setCharacters([...characters, json])
        })
        .catch(err => console.error(err))
    }
     

    return (
        <div>
          <CharacterCollection  characters={characters} planets={planets} handleAddToBattleChars={handleAddToBattleChars} handleAddPlanetToBattle={handleAddPlanetToBattle} />
          <YourBattleChars characters={characters} battleChars={battleChars} setBattleChars={setBattleChars} battlePlanets={battlePlanets} />
          <NewCharacterForm handleNewCharacter={handleNewCharacter}/>
        </div>
      )
}
    
export default MainPage;