
// or less ideally
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/auth';

// import useAuth from '../../hooks/auth';

// meshal=()=>{}
//(elemet)=>{retuern elemet*2}
// either above for export 
const Header = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Fo Mo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <Link to="/">Home</Link>
                    {isLoggedIn() ?
                        <>
                        
                            <Link to="/schools">school</Link>
                            <Link to="/students">student</Link>
                            <Link to="/teacher">teacher</Link>

                            <h3> Hello, {getProfile().email}   </h3>
                            <Link onClick={() => logout()} to='/'>Logout</Link>
                        </>
                        :
                        <>
                            <Link to="/signup">Signup</Link>
                            <Link to="/login">Login</Link>
                        </>

                    }


                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};
export default Header;

