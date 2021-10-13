/* eslint-disable no-unused-vars */
import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAYLGY9jwObVDu_ka1jAOS40Vths8OjBSk',
  authDomain: 'instagram-a1e97.firebaseapp.com',
  projectId: 'instagram-a1e97',
  storageBucket: 'instagram-a1e97.appspot.com',
  messagingSenderId: '194524050080',
  appId: '1:194524050080:web:cf9498c9871f65e7e8cfc5'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
