import React from 'react';
import {NavLink} from 'react-router-dom';


const CatagoryItem = ({catagory}) => {
    const {catagoryId, name} = catagory;
    return (
        <NavLink className={`nav-item ${(isActive) => isActive ? 'active' : null}`} to={`/catagory/${catagoryId}`}>{name}</NavLink>
    );
};

export default CatagoryItem;