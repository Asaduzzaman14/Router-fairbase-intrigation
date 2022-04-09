import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
    const { user, handelSignOut } = useFirebase()
    console.log(user);

    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
                <Link to='/order'>Order</Link>
                <Link to='/register'>Register</Link>

                {
                    user?.uid ?
                        <button onClick={handelSignOut}>sing out</button>
                        : <Link to='Login'>LogIn</Link>

                }

            </nav>
        </div>
    );
};

export default Header;