import firebase from "firebase";
import { firebase as firebaseConfig } from "configurations/firebase/keys";

firebase.initializeApp(firebaseConfig);

export const authRef = firebase.auth();

export const authStateChanged = firebase.auth().onAuthStateChanged();
