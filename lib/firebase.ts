import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD6yvbTwhdKWh-OJI2SYscVVUIWGvHda8A',
  authDomain: 'manonundnils.firebaseapp.com',
  projectId: 'manonundnils',
  storageBucket: 'manonundnils.appspot.com',
  messagingSenderId: '651588645750',
  appId: '1:651588645750:web:e3c7c0a28832fa1bc74057',
  measurementId: 'G-75CZ9NVBVM',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();
