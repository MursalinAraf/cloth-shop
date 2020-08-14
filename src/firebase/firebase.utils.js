import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyATqQztg8qfPCRv_ZibyZBJWWEb_lZy744",
    authDomain: "cloth-db-6ed8a.firebaseapp.com",
    databaseURL: "https://cloth-db-6ed8a.firebaseio.com",
    projectId: "cloth-db-6ed8a",
    storageBucket: "cloth-db-6ed8a.appspot.com",
    messagingSenderId: "351548329778",
    appId: "1:351548329778:web:457a5647970b8abeedd12b",
    measurementId: "G-YYKRZBM9TX"
  }

  export const CreateUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()

  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({promt : 'Select_Account'})

  export const SignInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;