import React from 'react';

import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import styles from './school.css';


export default function school(props) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    console.log(props);
    return (

        <div>
            <h1> {props.data.name} </h1>
            <button onClick={() => history.push('/schools/' + props.data.id)} > viewDetials </button>

        <div id='body'>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h1> {props.data.name} </h1>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
