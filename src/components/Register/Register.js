
import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Pleass Register Now</h3>
            <button style={{ margin: '20px' }}>sign in to goolge</button>
            <form>
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='Your passwrod' />
                <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;