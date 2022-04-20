import React from "react";
import "./CharacterCard.css"

// const charactersAPI = '/characters';

function CharacterCard( { character, onCardClick, onClickDelete }){
    // console.log(character)


    
    // function handleEditClick() {
    //     console.log("Updated character:", character)
    //     fetch(`http://localhost:4000/characters/${character.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({"content": characterText})
    //     })
    //     character.content = characterText
    // }

    return (
        <div className="characterCard"  onClick={()=>onCardClick(character)}>
            <img src={character.image} alt={character.name} />
            <h3> Name: {character.name} </h3>
            <h3> Movie: {character.movie} </h3>
            <h3> Weapons: {character.weapons} </h3>
            <div className="card-footer"> 
                <button className='edit'> 
                    <a href={`http://localhost:4000/editcharacter/${character.id}`}> edit </a> 
                </button>
                <button className='delete' 
                    onClick={(event) =>{
                    event.stopPropagation()
                    onClickDelete(character)
                }}> delete </button>
            </div>
        </div>
    )

}

export default CharacterCard;