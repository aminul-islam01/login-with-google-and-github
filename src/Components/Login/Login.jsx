import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../assets/Firebase/firebase.init';

const Login = () => {

    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = (provider) => {
        signInWithPopup(auth, provider)

        .then((result) => {
            // The signed-in user info.
            const loggedUser = result.user;
            setUser(loggedUser);
            console.log(loggedUser);

          }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
           console.log(errorMessage)
          });
        
    }

    const handleSignOut = () => {
        signOut(auth)
        .then((result) => {
            console.log(result);
            setUser(null);
        })
        .catch((error) => {
            console.log(error)
        })

    }

    return (
        <div>
            {user?<button onClick={handleSignOut}>Sign Out</button>
            :
            <div>
                <button onClick={()=> handleGoogleSignIn (googleProvider)}>Google Login</button>
                <button onClick={()=> handleGoogleSignIn (githubProvider)}>Github Login</button>
            </div> }
            {user && <div>
                <h2>User Name: {user.displayName}</h2>
                <h4>User Email: {user.email}</h4>
                <img src={user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;