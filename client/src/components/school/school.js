import React from 'react';

export default function school(props) {
    console.log(props);
    return (
        <div>
            <h1> {props.data.name} </h1>
        </div>
    );
}
