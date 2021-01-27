import React, { Component } from 'react';
import Student from './student';
import axios from 'axios';


export default class studentlist extends Component {
    state = {
        students: []
    }
    // TODO did mount // set states 
    componentDidMount() {
        axios('/api/student').then(res => {
            const resluts = res.data;
            console.log(resluts);
            this.setState({
                students: resluts
            });
        });


    }

    render() {
        return (
            <div>
                {/* <Addschool></Addschool> */}
                <button onClick={() => this.props.history.push('/add-student')} >add student</button>

                {
                    this.state.students.map(element => {
                        //    return <div key={element.id}>
                        //         <label></label>
                        //         <h1></h1>
                        //     </div>
                        return <Student key={element.id} data={element}></Student>;
                    })

                }

            </div>
        );
    }
}

