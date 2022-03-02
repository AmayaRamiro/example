import React, { useState } from "react";
import quotes from "../quotes.json";
import Button from "./changeQuotes"
import Quote from "./quote"


const getRandom = () => Math.floor(Math.random() * quotes.length);

const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#744c4c"
];


const QuotesBox = () => {
    const [phrase, setPhrase] = useState(quotes[getRandom()]);
    const changeQuotes = () =>{
        setPhrase(quotes[getRandom()]);
    }
    const ramdomColor = colors[Math.floor( Math.random() * 6 )]
    document.body.style = `background: ${ramdomColor}`

    return(
      
        <div className="QuoteBox" style={{color:ramdomColor}}>
            <Quote
                quotes={phrase}
            />
            <Button 
                changeQuotes={changeQuotes}
                ramdomColor = {ramdomColor}
            />
        </div>
    );
}

export default QuotesBox;