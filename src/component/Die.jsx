import React from "react";
import './Die.scss';



const Die = ({face, rolling}) =>{
    return(
        <>
            <i className={`die bi bi-dice-${face} ${rolling && "animate__animated animate__flip count count"}`}></i>
        </>
    )
}
export default Die;