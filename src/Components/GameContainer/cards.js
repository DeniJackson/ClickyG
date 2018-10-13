import React from 'react';

const Card = (props) =>(
    <div onClick={ ()=> props.handleClick(props.color)} 
    className='box' 
    id={props.color} 
    key={props.color}>
    {props.color}
</div>
)

export default Card;