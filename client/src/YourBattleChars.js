import React from "react";
import CharacterCard from "./CharacterCard";
import PlanetCard from "./PlanetCard";
import "./YourBattleChars.css"

function YourBattleChars({battleChars, battlePlanets, handleDeleteCharacter, handleRemoveFromYourBattleChars, handleRemoveFromYourBattlePlanets }) {

    const showBatCharacters = battleChars.map((batChar) => {
        return (
            <CharacterCard 
            key={batChar.id} 
            character={batChar}
            onClickDelete={handleDeleteCharacter}
            onCardClick={handleRemoveFromYourBattleChars} />
        
        )
    })
    const showBatPlanets = battlePlanets.map((batPlanet) => {
        return (
            <PlanetCard 
            key={batPlanet.id} 
            planet={batPlanet}
            onCardClick={handleRemoveFromYourBattlePlanets}
            />
        )
    })
  function GetValue(){
    const weapons = ["Lightning", "Light Saber", "the Force"];
    const random = Math.floor(Math.random() * weapons.length);
    console.log(random, weapons[random]);
    document.getElementById("message").innerHTML = random;
  }

  function GetValueOne(){
    const weapons = ["Lightning", "Light Saber", "the Force"];
    const random = Math.floor(Math.random() * weapons.length);
    console.log(random, weapons[random]);
    document.getElementById("messageOne").innerText=random;
  }

    // function clickRandom(){
    //     let counter = 1;
    //     setInterval(function() {
    //         if (counter <=3) {
    //             displayRandomWeapon();
    //             counter++;
    //         }}, 160)
    // }

    // function displayRandomWeapon(){

    // }
       

    return (
        <div>
            <div className="character-title">
                <h3>Get Ready to Battle</h3>
            </div>
            <div className="batCharContainer">
                {showBatCharacters}
            </div> 
            
            <div className="weapon-text-container">
                <div className="weapon-div-one">
                    <p className="weapon-text">
                    Your Battle Weapons:
                        <ul className="weapon-list">
                            <li>Lighting</li>
                            <li>Light Saber</li>
                            <li>the Force</li>
                        </ul>
                        </p>
                    <button className="wea" id="message" onClick={GetValue}> RANDOM WEAPON </button>
                </div>
                <div className="weapon-div-two">
                    <p className="weapon-text">
                        Your Battle Weapons:
                        <ul className="weapon-list">
                            <li>Lighting</li>
                            <li>Light Saber</li>
                            <li>the Force</li>
                        </ul>
                        </p>
                    <button className="wea" id="messageOne" onClick={GetValueOne}> RANDOM WEAPON </button>
                </div>
            </div>
            <div className="batPlanetContainer">
                <div className="batPlanet">
                {showBatPlanets}
                </div>
            </div>
        </div>
      );
}

export default YourBattleChars;