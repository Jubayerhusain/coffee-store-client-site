import { createUserWithEmailAndPassword } from "firebase/auth"
import { createContext } from "react"
import { auth } from "../firebase/firebase.init"
import { signInWithEmailAndPassword } from "firebase/auth/cordova"

export const AuthContext = createContext()
function AuthProvider({children}) {
    // Create Function for user creation
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Create function for login User
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        name:'juabyer',
        createUser,
        loginUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
