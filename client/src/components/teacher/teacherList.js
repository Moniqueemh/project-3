import React, { Component } from 'react';
import Teacher from './teacher';
import axios from 'axios';
//import Addteacher from './addteacher';


export default class teacherList extends Component {


    state = {
        teachers: []
    }
    // TODO did mount // set states 
    componentDidMount() {
        axios('/api/teacher').then(res => {
            const resluts = res.data;
            console.log(resluts);
            this.setState({
                teachers: resluts
            });
        });


    }

    updatedTeachersListById=(id)=> {
        console.log('update done');
        const teacher = this.state.teachers;
        const newList=teacher.filter(teacher => teacher.id !== id);
        this.setState({
            teachers:newList
        });
    }
    render() {
        return (
            <div>
                {/* <Addschool></Addschool> */}
                <button onClick={() => this.props.history.push('/add-teacher')} >add teacher</button>

                {
                    this.state.teachers.map(element => {
                        //    return <div key={element.id}>
                        //         <label></label>
                        //         <h1></h1>
                        //     </div>
                        return <Teacher key={element.id} data={element} ondelte={this.updatedTeachersListById}></Teacher>;
                    })

                }

            </div>
        );
    }
}

