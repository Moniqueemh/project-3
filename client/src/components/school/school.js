import React from 'react';
import { useHistory } from 'react-router-dom';

export default function school(props) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    console.log(props);
    return (
        <div>
            <h1> {props.data.name} </h1>
            <button onClick={() => history.push('/schools/' + props.data.id)} > viewDetials </button>
        </div>
    );
}
