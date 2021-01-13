import React, { Component } from 'react';
import School from './school';
import Addschool from './addSchool';


export default class schoolList extends Component {
    state = {
        schools: ['School 1', 'School 2', 'School 3']
    }
    // TODO did month // set states 
    render() {
        return (
            <div>
                <Addschool></Addschool>
                <button>Add School</button>
                {
                    this.state.schools.map(school => {
                        return <School key={school} data={school}></School>;

                    })

                }

            </div>
        );
    }
}

