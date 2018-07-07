import firebase from './../helpers/firebase';
import store from './../store';

class AuthService {
  constructor() {

  }

  /**
   *
   * @param email
   * @param password
   * @returns {Promise<firebase.auth.UserCredential>}
   */
  doAuthentication(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  /**
   *
   * @returns {Promise<void>}
   */
  doLogout() {
    return firebase.auth().signOut();
  }

  /**
   *
   * @returns {*}
   */
  getUserConnected() {
    let userLogged = store.getters.user;
    let isAuth = store.getters.isAuth;
    if (userLogged && isAuth) {
      return userLogged;
    }
    return this.resolveFirebaseDto(this.getUserFirebase());
  }

  /**
   *
   */
  getUserFirebase() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return user;

      } else {
        return null;
      }
    })
  }

  /**
   *
   * @param name
   * @param email
   * @param password
   * @returns {Promisse}
   */
  createUser(user) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((fbUser) => {
          this.emailVerification(fbUser).then(() => {
            this.updateProfile(fbUser, {name: user.name});
            resolve();
          });
        })
        .catch((err) => {
          reject(err);
        })
        .catch((err) => {
          reject(err);
        })
    });
  }

  emailVerification(fbUser) {
    return fbUser.user.sendEmailVerification();
  }

  /**
   *
   * @param firebaseUser
   * @param newUser
   * @returns {Promise<T>}
   */
  updateProfile(fbUser, newUser) {
    return fbUser.user.updateProfile({displayName: newUser.name})
      .then((user) => {
        return user
      })
  }

  /**
   *
   * @param user
   * @returns {{displayName: *, email: *, emailVerified: boolean, isAnonymous: boolean, metadata: *, phoneNumber: *, uid: *}}
   */
  resolveFirebaseDto(user) {
    let userResolve = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      metadata: user.metadata,
      phoneNumber: user.phoneNumber,
      uid: user.uid
    }

    return userResolve;
  }
}

export default new AuthService();
