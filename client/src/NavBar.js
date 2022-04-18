import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="nav">
            <NavLink exact to="/">Home</NavLink>
            <NavLink activeStyle={{textDecoration:"underline"}} to="/about">About</NavLink>
            <NavLink activeStyle={{textDecoration:"underline"}} to="/mainpage"> Main Page </NavLink>
        </div>
    )
}

export default NavBar;