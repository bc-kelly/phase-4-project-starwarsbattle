import React, { useState , useEffect } from "react";
import {useParams} from "react-router-dom";
import CharacterCard from "./CharacterCard"

function EditCharacter () {
    const params = useParams();

    const charactersAPI = 'http://localhost:4000/characters';
    const [character, setCharacter] = useState(null);

//GET REQUEST
    useEffect(()=>{
    fetch(`${charactersAPI}/${params.id}`)
    .then(response => response.json())
    .then(charactersData => {
      console.log(charactersData)
      setCharacter(charactersData)
    })
    }, [])
    

    const submit = () => {
      fetch(`${charactersAPI}/${params.id}`, {
        method: 'PATCH',
        headers: {
         'Content-type': 'application/json; charset=UTF-8',
       },
        body: JSON.stringify(character)
       })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    if (!character) return null;
    return (
        <div>
        <div className="edit-character">
            <h1>test from edit</h1>
            <CharacterCard character={character} />
            <div className="edit-form-div" >
                <form onSubmit={submit}>
                    <div className="form">
                        <label htmlFor="name">Name</label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="Character Name"
                            value={character.name}
                            onChange={(e) =>  setCharacter({ ...character, name: e.target.value})}
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

// steps: 
// set state to null
// import {useParams} from "react-router-dom"; -- in order to access one specific character
// const params = useParams();
// get request 
// add character card to return to display the get 
// function with patch request 
// just in case: if (!character) return null; 
// add form to return 
// add patch function to form
