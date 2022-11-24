// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// apiKey: "AIzaSyBASO77hJKNpCNgfg0P6xIhD0AjcHf_ukQ",
// authDomain: "the-resale-emporium.firebaseapp.com",
// projectId: "the-resale-emporium",
// storageBucket: "the-resale-emporium.appspot.com",
// messagingSenderId: "733524375139",
// appId: "1:733524375139:web:fd95f68bd5d2008b9c2a56",