import React from "react";
import { useSelector } from "react-redux";

const Theme = () => {
    const theme = useSelector(state => state.background);

    return (
        <div style={{
            width: '300px', 
            height: '300px', 
            backgroundColor: theme ? "gray" : "black" }}
        >
            <p style={{color: '#fff'}}>{theme ? "Светлая тема" : "Темная тема"}</p>
        </div>
    )
}

export default Theme;