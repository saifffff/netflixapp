import React from 'react';
import './Card.css';

const Card=(props)=>{
    return(<>
    <div className="card_main">
    <div className="card_img">
        <img src={props.isrc} alt="Card Pic" />
    </div>
    <div className="card_body">
    <span>{props.span}</span>
    <h3>{props.title}</h3>
        <a href={props.link} target="_blank" rel="noreferrer" >
            <button>Watch Now</button>
        </a>
    </div>

</div>
</>)
}


export default Card;