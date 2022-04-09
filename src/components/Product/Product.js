import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../fairbase.init';

const auth = getAuth(app)

const Product = () => {

    const [user] = useAuthState(auth)

    return (
        <div>
            <h2>This is Product page</h2>
            {user?.displayName}
        </div>
    );
};

export default Product;