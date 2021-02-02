import React from 'react';
import { useHistory } from 'react-router-dom';

const student = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    return (
        <div>
            <h1> {props.data.name} </h1>
            <button onClick={() => history.push('/student/' + props.data.id)} > viewDetials </button>
        </div>
    );

};
export default student;

