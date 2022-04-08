import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()
    return (
        <div>
            <h2>pleass Log in</h2>
            <button onClick={signInWithGoogle} style={{ margin: '20px' }}>sign in to goolge</button>
            <form>

                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='Your passwrod' />
                <br />
                <input type="submit" value='log In' />
            </form>
        </div>
    );
};

export default Login;