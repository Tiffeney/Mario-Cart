import React from 'react';
import { Link } from 'react-router-dom'

export default () => {
    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                <img src="https://i.redd.it/416qm7xg4nf01.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/new" className="navbar-item">Create</Link>
                </div>
            </div>
        </nav>
    )
};