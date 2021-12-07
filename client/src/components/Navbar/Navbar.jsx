import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        if (this.props.loading) {
            return <div>Loading...</div>;
        }
        return (
            <navbar id='mainNavComponent'>
                <Link to='/'>
                    Home
                </Link>
                
                <Link to ='/about'>
                    About
                </Link>

                <Link to='/projects'>
                    Projects
                </Link>
            </navbar>
        )
    }

}

export default Navbar;