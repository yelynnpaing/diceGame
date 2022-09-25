import React from "react";
import './Die.scss';



const Die = ({face, rolling}) =>{
    return(
        <>
            <i className={`die bi bi-dice-${face} ${rolling && "shaking"}`}></i>
        </>
    )
}
export default Die;