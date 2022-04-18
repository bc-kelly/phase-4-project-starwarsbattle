import React from "react";
import "./PlanetCard.css"

function PlanetCard( { planet, onCardClick }){

    return (
        <div className="planetCard" onClick={()=>onCardClick(planet)}>
            <img src={planet.image} alt={planet.name} />
            <h3>Name: {planet.name}</h3>
        </div>
    )

}

export default PlanetCard;