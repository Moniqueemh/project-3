import React from 'react';
import Table from 'react-bootstrap/Table';

export default function showNotes(props) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>{props.type === 'student' ? 'student Name' : 'teacher Name'}</th>
                        <th>note title</th>
                        <th>note body</th>
                        <th>date</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        props.notes.map((element, index) => {
                            //    return <div key={element.id}>
                            //         <label></label>
                            //         <h1></h1>
                            //     </div>
                            return <tr key={element.id}>
                                <td>{index + 1}</td>
                                <td>{element.Student ? element.Student.name : element.Teacher.name} </td>
                                <td>{element.title}</td>
                                <td>{element.body}</td>
                                <td>{element.createdAt}</td>
                            </tr>;
                        })
                    }

                </tbody>
            </Table>
        </div>
    );
}
