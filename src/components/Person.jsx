import React from 'react';

 const  Person = (props)=>{

    return(
        <div>
            <h1>I am {props.name}. and I am  {props.age} years old!</h1>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.change} name="" id=""/>
        </div>
    )
}

export default Person;
