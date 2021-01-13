import React, { Component } from 'react'
import Student from './student'
import Addstudent from './addstudent'


export default class studentlist extends Component {
    render() {
        return (
            <div>
           <Student></Student> 
            <Addstudent></Addstudent>
           {/* <div>student1</div>
           <div>student2</div>
           <div>student3</div> */}
           


            </div>
        )
    }
}

