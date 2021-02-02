import React, { Component } from 'react';
import School from './school';
import axios from 'axios';
import './school.css';

export default class schoolList extends Component {
    state = {
        schools: []
    }
    // TODO did mount // set states 
    componentDidMount() {
        axios('/api/school').then(res => {
            const resluts = res.data;
            console.log(resluts);
            this.setState({
                schools: resluts
            });
        });


    }

    render() {
        return (
            <div>
                {/* <Addschool></Addschool> */}
                <button onClick={() => this.props.history.push('/add-school')} >add school</button>

                {
                    this.state.schools.map(element => {
                        //    return <div key={element.id}>
                        //         <label></label>
                        //         <h1></h1>
                        //     </div>
                        return <School key={element.id} data={element}></School>;
                    })

                }

            </div>
        );
    }
}

