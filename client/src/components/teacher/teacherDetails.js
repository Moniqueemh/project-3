import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import NoteForm from '../NoteForm';
import ShowNotes from '../showNotes';
import qs from 'qs';

class teacherDetails extends Component {
    state = {

        teacher: {},
        notes: []
    }
    componentDidMount() {
        const teacherId = this.props.match.params.id;
        axios({
            method: 'get',
            url: '/api/teacher/' + teacherId,
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
                    TeacherId: teacherId
                },
                include: 'Student'
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

                    <h1>{this.state.teacher.name}</h1>
                </section>

                <section>
                    <NoteForm teacherId={this.state.teacher.id}>

                    </NoteForm>
                </section>

                <section>
                    <ShowNotes notes={this.state.notes}></ShowNotes>
                </section>
            </div>
        );
    }
}
export default withRouter(teacherDetails);