import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Gmap from '../../pages/Gmap';


class schoolDetials extends Component {

    state = {
        school: {}
    }

    componentDidMount() {
        const schoolId = this.props.match.params.id;
        axios({
            method: 'get',
            url: '/api/school/' + schoolId,
        })
            .then((result) => {
                console.log(result);
                this.setState({
                    school: result.data
                });
            });

    }
    render() {
        return (
            <div>
                <Gmap city={this.state.school.city}></Gmap>
                <h3>{this.state.school.name}</h3>
                <h3>{this.state.school.address}</h3>
                <h3>{this.state.school.city}</h3>
                
            </div>
        );
    }
}

export default withRouter(schoolDetials);
