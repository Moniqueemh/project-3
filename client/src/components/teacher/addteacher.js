import React, { Component } from 'react'


class Addteacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            school: '',
            students: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name == 'teacher') {
            this.setState({ name: event.target.value })
        } else if (event.target.name == 'school') {
            this.setState({ address: event.target.value })
        } else {
            this.setState({ phone: event.target.value })


        }


    }
// TODO: api for add school
    handleSubmit(event) {

        console.log(event)
        console.log(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <label>
                    Name:
            <input name='teacher' type="text" value={this.state.name} onChange={this.handleChange} />
                </label>

                <label>
                    school:
            <input name='school' type="text" value={this.state.address} onChange={this.handleChange} />
                </label>

                <label>
                    students :
            <input name='students' type="text" value={this.state.phone} onChange={this.handleChange} />
                </label>
                


                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Addteacher