import { createUserWithEmailAndPassword } from "firebase/auth"
import { createContext } from "react"
import { auth } from "../firebase/firebase.init"

export const AuthContext = createContext()
function AuthProvider({children}) {
    // Create Function for user creation
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        name:'juabyer',
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
