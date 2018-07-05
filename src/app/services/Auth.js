import firebase from './../helpers/firebase';

class AuthService {
  constructor() {

  }

  doAuthentication(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

}
export default new AuthService();
