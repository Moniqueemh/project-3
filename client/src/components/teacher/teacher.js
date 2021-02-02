import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function teacher(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    const deleteTeacher = (teacherId) => {
        console.log(teacherId);
        axios({
            method: 'delete',
            url: '/api/teacher/' + teacherId,

        })
            .then(() => {
                props.ondelte(props.data.id);
            });

    };
    return (
        <div>
            <h1> {props.data.name} </h1>
            <button onClick={() => deleteTeacher(props.data.id)}> delete</button>
            <button onClick={() => history.push('/teacher/' + props.data.id)} > viewDetials </button>
        </div>
    );
}

