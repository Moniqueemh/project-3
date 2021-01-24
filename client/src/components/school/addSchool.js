import React, { Component } from 'react';
import axios from 'axios';


class Addschool extends Component {
    state = {
        name: '',
        address: '',
        phone: ''
    };
    // constructor(props) {
    //     super(props);

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    handleChange(event) {
        if (event.target.name === 'school') {
            this.setState({ name: event.target.value });
        } else if (event.target.name === 'address') {
            this.setState({ address: event.target.value });
        } else {
            this.setState({ phone: event.target.value });


        }


    }
    // TODO: api for add school & local stroger
    handleSubmit(event) {

        console.log(event);
        console.log(this.state);
        event.preventDefault();
        axios({
            method: 'post',
            url: '/api/school',
            data: this.state
        }).then(() => {
            //TODO fix redirection
            const { history } = this.props;
            console.log(this.props);
            if (history) { history.push('/schools'); }
        });
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>

                <label>
                    Name:
                    <input name='school' type="text" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                </label>

                <label>
                    address:
                    <input name='address' type="text" value={this.state.address} onChange={(e) => this.handleChange(e)} />
                </label>

                <label>
                    phone-Number :
                    <input name='phone' type="text" value={this.state.phone} onChange={(e) => this.handleChange(e)} />
                </label>


                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Addschool;