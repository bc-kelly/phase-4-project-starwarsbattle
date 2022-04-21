import React, {useState } from "react";
import "./NewCharacterForm.css"

const charactersAPI = 'http://localhost:4000/characters';

function NewCharacterForm (){

    const [characters, setCharacters] = useState([])

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

    function handleFormSubmit(event){
        event.preventDefault()
        
        const name = event.target['name'].value
        const image = event.target['image'].value
        const movie = event.target['movie'].value
        
        const newCharacter = {
            name: name,
            image: image,
            movie: movie
        };
        
        handleNewCharacter(newCharacter);
        
        event.target.reset();
    }
    
        return(   
            <div className="form-div" >
                <form className="add-form" onSubmit= {handleFormSubmit}>
                    <div className= "empty" >
                    </div>
                    <div className="form">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" placeholder="Character Name" />
                    </div>

                    <div>
                        <label htmlFor="image">Image</label>
                        <input id="image" type="text" placeholder="Character Image" />
                    </div>

                    <div>
                        <label htmlFor="movie">Movie</label>
                        <input id="movie" type="text" placeholder="Movie Name" />
                    </div>
                    
                    <input type="submit" value="Add Character" />
                </form>
            </div>
        )
    
}

export default NewCharacterForm;
