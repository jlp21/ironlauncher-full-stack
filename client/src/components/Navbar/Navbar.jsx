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
                    <h2>Home</h2>
                </Link>

                <Link to='/about'>
                    <h2>About</h2>
                </Link>

                <Link to='/projects'>
                    <h2>Projects</h2>
                </Link>

                <a target="_blank" rel="noreferrer" href="https://viajesconintencion.co">
                    <h2>Viajes Con Intencion</h2></a>
            </navbar>
        )
    }

}

export default Navbar;