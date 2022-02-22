const firebaseConfig = {
    apiKey: "AIzaSyAauVTe-uKeCHstJ2qjG1iDvUy0kEwbiTQ",
    authDomain: "test-demo-83e6c.firebaseapp.com",
    projectId: "test-demo-83e6c",
    storageBucket: "test-demo-83e6c.appspot.com",
    messagingSenderId: "283731186944",
    appId: "1:283731186944:web:2e5196c3e98973b2654fe5",
    measurementId: "G-J20F5DNVDX"
  };
  const appGm = firebase.initializeApp(firebaseConfig);
  console.log(appGm);
  export default appGm;