// import * as _noti from "../common/notify.js";
const config = {
    url: "http://127.0.0.1:5500/project_login-sign/sign_login/login_sign.html",
    handleCodeInApp: true,
  };

  const createNewAccout = (email, password) =>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
      console.log(email);
      console.log(password);
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  }
  export {createNewAccout};