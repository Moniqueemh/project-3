import React, { Component } from 'react';
import axios from 'axios';

class Addteacher extends Component {
    // constructor(props) {
    //     super(props);
    state = {
        name: '',
        address: '',
        phone: '',
        schools: [],
        SchoolId: 0
        // students: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // }


    componentDidMount() {
        axios('/api/school').then(res => {
            const resluts = res.data;
            console.log(resluts);
            this.setState({
                schools: resluts
            });
        });
    }

    handleChange(event) {
        if (event.target.name === 'name') {
            this.setState({ name: event.target.value });
        } else if (event.target.name === 'address') {
            this.setState({ address: event.target.value });
        } else if (event.target.name === 'SchoolId') {
            console.log(event.target.value, 'test school id');
            this.setState({ SchoolId: event.target.value });
        }
        else {
            this.setState({ phone: event.target.value });


        }

    }
    // TODO: api for add school
    handleSubmit(event) {

        console.log(event);
        console.log(this.state);
        event.preventDefault();

        axios({
            method: 'post',
            url: '/api/teacher',
            data: {
                name: this.state.name,
                address: this.state.address,
                phone: this.state.phone,
                SchoolId: this.state.SchoolId

            }
        }).then(() => {
            //TODO fix redirection
            const { history } = this.props;
            console.log(this.props);
            if (history) { history.push('/teacher'); }
        });
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>

                <label>
                    Name:
                    <input name='name' type="text" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                </label>

                <label>
                    address:
                    <input name='address' type="text" value={this.state.address} onChange={(e) => this.handleChange(e)} />
                </label>

                <label>
                    phone-Number :
                    <input name='phone' type="text" value={this.state.phone} onChange={(e) => this.handleChange(e)} />
                </label>
                <label htmlFor="school"> select a school</label>

                <select value={this.state.SchoolId} onChange={(e) => this.handleChange(e)} name="SchoolId" id="school">
                    <option>... اختر </option>

                    {
                        this.state.schools.map(school => {
                            //    return <div key={element.id}>
                            //         <label></label>
                            //         <h1></h1>
                            //     </div>
                            return <option key={school.id} value={school.id}>{school.name}</option>;
                        })
                    }

                </select>


                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Addteacher;