import React from "react";
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    return (
        <div>
            <h3 className="nav-header" >STAR WARS: BATTLE OF THE KNOWN UNIVERSE</h3>
            <div className="nav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink activeStyle={{textDecoration:"underline"}} to="/about">About</NavLink>
                <NavLink activeStyle={{textDecoration:"underline"}} to="/mainpage"> Main Page </NavLink>
                <NavLink activeStyle={{textDecoration:"underline"}} to="/newcharacterform">Add Character</NavLink>
            </div>
        </div>
    )
}

export default NavBar;