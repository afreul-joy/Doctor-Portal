import { useEffect, useState } from "react";
import initilizeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,updateProfile   } from "firebase/auth";

initilizeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState('')
  
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  const registerUser = (email, password, name, history) => {
     setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('')
        const newUser = { email, displayname: name }
        setUser(newUser)
        // save user to the database
        saveUser(email,name,'POST')
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {  
        }).catch((error) => {
        });

        history.replace('/')
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => { setIsLoading(false) });
  }

  const loginUser = (email, password,location,history) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('')  
        })
        .catch((error) => {
         setAuthError(error.message);
        })
        .finally(() =>  setIsLoading(false) )

  }
  const signInWithGoogle = (location, history) => {
     setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
         const destination = location?.state?.from || '/';
        history.replace(destination);
        const user = result.user;
         // save user to the database
        saveUser(user.email,user.displayName,'PUT')
        setAuthError('')
        
      }).catch((error) => {
        setAuthError(error.message);
      })
     .finally(() =>  setIsLoading(false) )

  }

  // observer user state 
  useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user)
          } else {
            setUser({})
        }
        setIsLoading(false)
        });
          return () => unsubscribe;
    }, [])
  

  const logOut = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(() => setIsLoading(false))
  }

  const saveUser = (email,displayName,method) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
      .then()
  }

  return {
    user,
    isLoading,
    registerUser,
    logOut,
    loginUser,
    authError,
    signInWithGoogle
  }
}

export default useFirebase;