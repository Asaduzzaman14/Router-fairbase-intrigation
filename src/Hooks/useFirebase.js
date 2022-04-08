import { useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../fairbase.init";


const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {

    const [user, setUser] = useState({})


    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const user = res.user
                console.log(user);
            })
            .catch(err => console.log(err))


        console.log('sign in successful');
    }


    return { user, signInWithGoogle }
}
export default useFirebase