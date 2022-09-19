import React from 'react';
import {Link} from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
    <div>
        <Link to='/'>
            <h1>Cryptobase</h1>
        </Link>
        <div>
            <ThemeToggle/>
        </div>
        <div>
            <link to='/signin'>Sign In</link>
            <link to='/signup'>Sign Up</link>
        </div>
        <div>
            {/* Menue icon */}

        </div>
        <div>
            <AiOutlineMenu/>
        </div>
        <div>
            {/* mobile menu */}
        </div>
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </div>

    </div>
    )
}

export default Navbar