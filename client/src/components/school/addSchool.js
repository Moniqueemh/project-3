import React, { Component } from 'react';


class Addschool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
        // set  
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <label>
                    Name:
                    <input name='school' type="text" value={this.state.name} onChange={this.handleChange} />
                </label>

                <label>
                    address:
                    <input name='address' type="text" value={this.state.address} onChange={this.handleChange} />
                </label>

                <label>
                    phone-Number :
                    <input name='phone' type="text" value={this.state.phone} onChange={this.handleChange} />
                </label>


                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Addschool;