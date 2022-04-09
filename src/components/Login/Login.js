import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../fairbase.init';

const auth = getAuth(app)
const Login = () => {

    const [signInWithGoogle] = useSignInWithGoogle(auth)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/';

    const handelGogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    return (



        <div>
            <h2>pleass Log in</h2>
            <button onClick={handelGogleSignIn} style={{ margin: '20px' }}>sign in to goolge</button>
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