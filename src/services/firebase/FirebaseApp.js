import { settings } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const FirebaseApp = initializeApp({
  apiKey: settings.API_KEY_FIREBASE,
  authDomain: "apostas-base.firebaseapp.com",
  projectId: "apostas-base",
  storageBucket: "apostas-base.appspot.com",
  messagingSenderId: settings.MESSAGING_SENDER_ID,
  appId: settings.APP_ID,
  measurementId: settings.MEASUREMENT_ID,
});

export default FirebaseApp;
