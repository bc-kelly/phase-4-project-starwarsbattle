import React from "react";
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    return (
        <div>
            <h3 className="nav-header" >STAR WARS: BATTLE OF THE KNOWN UNIVERSE</h3>
            <div className="nav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/mainpage"> Main Page </NavLink>
                <NavLink to="/newcharacterform">Add Character</NavLink>
                <NavLink to="/login"> Login/Sign Up </NavLink>
            </div>
        </div>
    )
}

export default NavBar;