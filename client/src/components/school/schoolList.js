import React, { Component } from 'react';
import School from './school';

export default class schoolList extends Component {
    state = {
        schools: []
    }
    // TODO did mount // set states 
    componentDidMount() {

        this.setState({

            schools: ['shcool1']

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
                        return <School key={element} data={element}></School>;
                    })

                }

            </div>
        );
    }
}

