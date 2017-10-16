import React from 'react';

export default function Greeter ({name}) { // {name} is es6 comes from props.name
    return (
        <h2>{name} says hi!!!</h2>
    );
}