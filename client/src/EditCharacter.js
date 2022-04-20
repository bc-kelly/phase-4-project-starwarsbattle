import React, { useState , useEffect } from "react";
import {useParams} from "react-router-dom";
import CharacterCard from "./CharacterCard"

function EditCharacter () {

    const charactersAPI = 'http://localhost:4000/characters';
    const [character, setCharacter] = useState([])

    
    const params = useParams();
    console.log(params)

   
    useEffect(()=>{
    fetch(`${charactersAPI}/${params.id}`)
      .then(response => response.json())
      .then(charactersData => {
      console.log(charactersData)
      setCharacter(charactersData)
      })
      }, [])
    

    // fetch(`${charactersAPI}/${updatedCharacter.id}`, {
    //     method: 'PATCH',
    //     body: JSON.stringify({
    //     title: 'foo',
    //     }),
    //     headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    return (
        <div>
        <div className="edit-character">
            <h1>test from edit</h1>
            <CharacterCard character={character}/>
        </div>
    </div>
    );

}

export default EditCharacter;

// useEffect(()=>{
//   fetch(charactersAPI)
//   .then(response => response.json())
//   .then(charactersData => {
//     // console.log(charactersData)
//     setCharacters(charactersData)
//   })
// }, [])