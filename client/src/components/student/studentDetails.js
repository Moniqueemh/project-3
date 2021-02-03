import React, { Component } from 'react';
import ShowNotes from '../showNotes';
import axios from 'axios';
import qs from 'qs';
import { withRouter } from 'react-router-dom';


class StudentDetails extends Component {
    state = {

        notes: []
    }
    componentDidMount() {
        const studentId = this.props.match.params.id;
        axios({
            method: 'get',
            url: '/api/teacher/' + studentId,
        })
            .then((result) => {
                console.log(result);
                this.setState({
                    teacher: result.data
                });
            });
        axios({
            method: 'get',
            url: '/api/notes',
            'params': {
                where: {
                    StudentId: studentId
                },
                include: 'Teacher'
            },
            paramsSerializer: params => {
                return qs.stringify(params);
            }
        })
            .then((result) => {
                console.log(result);
                this.setState({
                    notes: result.data
                });
            });
    }
    render() {
        return (
            <div>
                <section>
                    <ShowNotes notes={this.state.notes} type="'student"></ShowNotes>
                </section>
            </div>
        );
    }
}
export default withRouter(StudentDetails);