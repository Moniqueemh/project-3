import React, { Component } from 'react';
import School from './school';

export default class schoolList extends Component {
    state = {
        schools: ['School 1', 'School 2', 'School 3']
    }
    // TODO did mount // set states 
    render() {
        return (
            <div>
                {/* <Addschool></Addschool> */}
                <button>Add School</button>
                {
                    this.state.schools.map(element => {
                        //    return <div key={element.id}>
                        //         <label></label>
                        //         <h1></h1>
                        //     </div>
                        return <School key={element} data={element}></School>;
                    })

                }

            </div>
        );
    }
}

