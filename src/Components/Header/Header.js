import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {

    return (
        <header className='header'>
            <Link to="/" className='header-logo'>La table de Chantal</Link>

            <nav className='header-nav'>
                <NavLink to="/" end>Accueil</NavLink>
                <NavLink to="/carte">La carte</NavLink>
                <NavLink to="/boissons">Boissons</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}
