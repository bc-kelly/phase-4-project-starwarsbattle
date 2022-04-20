import React, { useState , useEffect } from "react";
import CharacterCard from "./CharacterCard"

function EditCharacter () {

    const charactersAPI = 'http://localhost:4000/characters';
    const [characters, setCharacters] = useState([])

   
    useEffect(()=>{
      fetch(charactersAPI)
      .then(response => response.json())
      .then(charactersData => {
      console.log(charactersData)
      setCharacters(charactersData)
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
            <CharacterCard />
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