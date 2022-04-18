import React from "react"
import "./NewCharacterForm.css"

function NewCharacterForm ({handleNewCharacter}){

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
            <div>
                <form onSubmit= {handleFormSubmit}>
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