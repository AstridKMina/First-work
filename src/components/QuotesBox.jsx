import React from 'react';
import quotes from '../quotes.json'



const QuotesBox = ({changer, colorback}) => {


    return (

        <div className='quotes' style={{color:`${colorback}`}}>
            <h4><i className="fa-solid fa-quote-left"></i> {quotes[changer].quote} </h4>
            <h5> {quotes[changer].author} </h5> 
        </div>

    );
};


export default QuotesBox;