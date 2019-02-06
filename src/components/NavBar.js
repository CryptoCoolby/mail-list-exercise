import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => (

    <nav className="nav-bar">
        <NavLink exact={true} activeClassName="nav-active" to="/">Sliding Items</NavLink>
        <NavLink exact={true} activeClassName="nav-active" to="/404">Not Found Page</NavLink>
        <NavLink exact={true} activeClassName="nav-active" to="/Example">Example</NavLink>
        <NavLink exact={true} activeClassName="nav-active" to="/Example">Example</NavLink>
        <NavLink exact={true} activeClassName="nav-active" to="/Example">Example</NavLink>
        <NavLink exact={true} activeClassName="nav-active" to="/Example">Example</NavLink>
        <NavLink exact={true} activeClassName="nav-active" to="/Example">Example</NavLink>
        <NavLink exact={true} activeClassName="nav-active" to="/Example">Example</NavLink>
        <NavLink exact={true} activeClassName="nav-active" to="/Example">Example</NavLink>
        <NavLink exact={true} activeClassName="nav-active" to="/Example">Example</NavLink>
        <NavLink exact={true} activeClassName="nav-active" to="/">Sliding Items</NavLink>
        <NavLink exact={true} activeClassName="nav-active" to="/404">Not Found Page</NavLink>
    </nav>
)

export default NavBar