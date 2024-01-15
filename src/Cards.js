import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/Cards.scss';

function Cards(props) 
{
    console.log(props)
    return ( 
        <div className="card mx-auto" style={{
            width:'18rem'}}>
         <img src={props.img} className="card-img-top img-max" alt="..." />
          <div className="card-body">
           <h2 className="card-title">{props.title}</h2>
           <p className="card-text">{props.description}</p>
          </div>
        </div>
     );
}

export default Cards;