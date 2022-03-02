import React from "react";


const Quote = ({quotes, ramdomColor})  =>{
    
    return(
        <>
            <div className="container-quote">
                <i class="fa-solid fa-quote-left " style={{color:ramdomColor}}></i> 
                <div className="box-phrase">
                    <p>{quotes.quote}</p>
                </div>
            </div>
            <h3>{quotes.author}</h3>
        </>
    );
}

export default Quote;