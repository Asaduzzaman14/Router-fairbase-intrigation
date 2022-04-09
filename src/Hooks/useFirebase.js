import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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
    }
    const handelSignOut = () => {
        signOut(auth)
            .then(() => { })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    return { user, signInWithGoogle, handelSignOut }
}
export default useFirebase