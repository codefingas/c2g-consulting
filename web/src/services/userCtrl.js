/* eslint-disable no-console */
/* eslint-disable  no-async-promise-executor */
/* eslint-disable no-unused-vars */
import firebase from "firebase";
import * as Cookies from "js-cookie";
import router from "../router";
import asc from "./asc";

const Auth = firebase.auth();
const ajoUserServerCalls = new asc("user");
const ajoCycleServerCalls =  new asc("cycles");

class UserController {
  static login(email, password) {
    return new Promise(async (resolve, reject) => {
      Auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          Auth.onAuthStateChanged((user) => {
            if (user) {
              ajoUserServerCalls
                .postCalls("/getUserData", { uid: user.uid })
                .then((resp) => {
                  resolve(resp);
                })
                .catch((err) => {
                 reject(err);
                });
            }
          });
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }

  static logout() {
    return new Promise(async (resolve, reject) => {
      Auth.signOut()
        .then(() => {
          Cookies.remove('vuex'); // clear the cookie that the app operates with
          router.push("/login");
          location.reload(); // TODO: THIS was done to resolve the issue with admin badge not showing, look for a more effecient mean
          resolve();
        })
        .catch((err) => {
          console.log("SIGN OUT ERR", err);
          reject(err);
        });
    });
  }

  static verifyUser() {
    const user = Auth.currentUser;

    user
      .sendEmailVerification()
      .then(function() {
        // Email sent.
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  }

  static sendEmailToLogin() {
    //TODO: CREATE SEND EMAIL TO LOGIN FUNCTIONALITY
  }

  static forgotPassword(email) {
    return new Promise(async (resolve, reject) => {
      Auth.sendPasswordResetEmail(email)
        .then(() => {
          // Email sent.
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static deleteUser() {
    Auth.currentUser
      .delete()
      .then(function() {
        // User deleted.
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  }

  static reAuthenticate(signInCredentials) {
    Auth.reauthenticateWithCredential(signInCredentials)
      .then(function() {
        // User re-authenticated.
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  }

  static getUser() {}

  static signUp(data) {
    return new Promise(async (resolve, reject) => {
      //TODO: RESOLVE THIS BLOCK PROPERLY
      ajoUserServerCalls
        .postCalls("/signup", data)
        .then().then(async (resp) => {
          if (resp.created === true) {
            await this.login(data.email, data.password).then((user) => {
              resolve(user);
            });
        }})
        .catch((err) =>reject(err));
    });
  }

}

export default UserController;
