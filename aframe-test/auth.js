AFRAME.registerSystem('auth', {
    init() {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          this.displayName = user.displayName;
          this.email = user.email;
          this.emailVerified = user.emailVerified;
          this.photoURL = user.photoURL;
          this.uid = user.uid;
          this.phoneNumber = user.phoneNumber;
          this.providerData = user.providerData;
          console.log(`User ${user.displayName} signed in`);
        } else {
          console.log("User not signed in");
        }
      }, function (error) {
        console.log(error);
      });
      
      // console.log("Init authentication");
      // this.uiConfig = {
      //   signInSuccessUrl: 'http://localhost:8080',
      //   signInOptions: [
      //     firebase.auth.GoogleAuthProvider.PROVIDER_ID
      //   ]
      // };

      // this.ui = new firebaseui.auth.AuthUI(firebase.auth());
      // // The start method will wait until the DOM is loaded.
      // this.ui.start('#firebaseui-auth-container', this.uiConfig);
    }
})