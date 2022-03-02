import React from "react";

const Button = ({changeQuotes , ramdomColor})  =>{
    
    return(
        <button className="button" onClick={changeQuotes} style={{background: ramdomColor}}>
            <i class="fa-solid fa-angle-right"></i>
        </button>
    );
}

export default Button;