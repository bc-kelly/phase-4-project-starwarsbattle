import React from "react";
import "./PlanetCard.css"

function PlanetCard( { planet }){

    return (
        <div className="planetCard">
            <img src={planet.image} alt={planet.name} />
            <h3>Name: {planet.name}</h3>
        </div>
    )

}

export default PlanetCard;