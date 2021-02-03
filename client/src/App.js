import React from 'react';
// import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import useAuth from './hooks/auth';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Notes from './pages/Notes';
// homepage components
import MyCarousel from './components/carousel/carousel.comp';
import TitleMessage from './components/title/title.comp';
import Footer from './components/footer/footer';
import Calendar from './components/calendar/calendar';

import SchoolList from './components/school/schoolList';
import Header from './components/layout/header';

import Studentlist from './components/student/studentList';

import teacherList from './components/teacher/teacherList';
import Addschool from './components/school/addSchool';
import Addstudent from './components/student/addstudent';
import Addteacher from './components/teacher/addteacher';
import SchoolDetials from './components/school/schoolDetials';
import TeacherDetails from './components/teacher/teacherDetails';
import StudentDetails from './components/student/studentDetails';

function App() {
    // Pull auth token from storage, in case you refresh the page
    const { getToken, logout } = useAuth();
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

    // A nice trick that if we EVER get back a 401, will pop the token off
    axios.interceptors.response.use(response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, error => {
        const { message } = error.toJSON();
        // If we had time, we could write our own custom method to the auth middleware
        // However, we are just gonna use their message.
        if (message === 'Request failed with status code 401') {
            logout();
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return (
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path='/'>
                    <MyCarousel />
                    <TitleMessage />
                    
                    <Home />
                </Route>
                <Route path='/signup'>
                    <Signup />
                    <MyCarousel />
                </Route>
                <Route path='/login'>
                    <Login />
                    <MyCarousel />
                </Route>

                <Route path='/add-school'>
                    <Addschool />
                    <MyCarousel />
                </Route>

                <Route path='/add-student'>
                    <Addstudent />
                    <MyCarousel />
                </Route>


                <Route path='/add-teacher'>
                    <Addteacher />
                </Route>

                <Route path={'/schools/:id'}>
                    <SchoolDetials />
                </Route>


                <Route path={'/teacher/:id'}>
                    <TeacherDetails />
                </Route>
                <Route path={'/student/:id'}>
                    <StudentDetails />
                </Route>
                <Route path='/calendar'>
                    <Calendar /> 
                </Route>

                <Route path="/schools" component={SchoolList} />
                <Route path="/students" component={Studentlist} />
                <Route path="/teacher" component={teacherList} />


                <PrivateRoute exact path='/notes'>
                    <Notes />
                </PrivateRoute>

            </Switch>

            <Footer />

        </Router>
    );
}

// Yanked straight from the react-router docs for redirects
function PrivateRoute({ children, ...rest }) {
    const { isLoggedIn } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn() ? (
                    children
                ) :
                    (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default App;
