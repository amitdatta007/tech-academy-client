import React from 'react';
import { NavLink } from "react-router-dom";

const NavItem = ({name, path, setOpen}) => {
    return (
        
            <NavLink onClick={() => setOpen(false)} className={`nav-item ${(isActive) => isActive ? 'active' : null}`} to={path}>{name}</NavLink>
        
    );
};

export default NavItem;