import React, { useState , useEffect } from "react";
import {useParams} from "react-router-dom";
import CharacterCard from "./CharacterCard"

function EditCharacter () {
    const {id, name} = character;

    const charactersAPI = 'http://localhost:4000/characters';
    const [character, setCharacter] = useState([]);
    const [updatedName, setUpdatedName] = useState(name);
    const [characters, setCharacters]= useState([]);


    
    const params = useParams();
    console.log(params)

//GET REQUEST
    useEffect(()=>{
    fetch(`${charactersAPI}/${params.id}`)
      .then(response => response.json())
      .then(charactersData => {
      console.log(charactersData)
      setCharacter(charactersData)
      })
      }, [])
    

      function handleUpdateCharacter(updatedCharacter) {
        const updatedCharactersArray = characters.map((character) => {
          if (character.id === updatedCharacter.id) {
            return updatedCharacter;
          } else {
            return character;
          }
        });
        setCharacters(updatedCharactersArray);
      }


      function handleCharacterEdit(e) {
        e.preventDefault();
        fetch(`http://localhost:4000/characters/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: updatedName }),
        })
          .then((r) => r.json())
          .then((updatedCharacter) => {
            handleUpdateCharacter(updatedCharacter);
          });
      }

//     fetch(`${charactersAPI}/${params.id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify({ name: name }),
        
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// })

    return (
        <div>
        <div className="edit-character">
            <h1>test from edit</h1>
            <CharacterCard character={character} />
            <div className="edit-form-div" >
                <form onSubmit={handleCharacterEdit}>
                    <div className="form">
                        <label htmlFor="name">Name</label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="Character Name" 
                            value={updatedName} 
                            onChange={(e) =>setUpdatedName(e.target.value)}
                        />
                    </div>

                    {/* <div>
                        <label htmlFor="image">Image</label>
                        <input id="image" type="text" placeholder="Character Image" />
                    </div>

                    <div>
                        <label htmlFor="movie">Movie</label>
                        <input id="movie" type="text" placeholder="Movie Name" />
                    </div> */}
                    
                    <input type="submit" value="Edit Character" />
                </form>
            </div>

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