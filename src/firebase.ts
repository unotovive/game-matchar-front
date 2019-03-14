import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire);

const config = {
  apiKey: 'AIzaSyBXxqBQzF_qmEb4Xm9SjujpBSfQcGnwbmU',
  authDomain: 'gamematchar-front.firebaseapp.com',
  databaseURL: 'https://gamematchar-front.firebaseio.com',
  projectId: 'gamematchar-front',
  storageBucket: 'gamematchar-front.appspot.com',
  messagingSenderId: '856091828041',
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.firestore();
