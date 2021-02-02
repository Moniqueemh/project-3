import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import styles from './school.css';

export default function school(props) {
    console.log(props);
    return (
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
