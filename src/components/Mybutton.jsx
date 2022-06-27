import React from 'react';

const Mybutton = ({btn, colorback}) => {
    return (
        <div>
            <button style={{background:`${colorback}`}} onClick={btn}><i className="fa-solid fa-angle-right"></i></button>
        </div>
    );
};

export default Mybutton;