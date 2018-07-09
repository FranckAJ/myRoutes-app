import firebase from './../helpers/firebase';

class CitiesService {

  constructor() {
  }

  getCities() {
    return firebase.firestore.collection('cities').get();
  }

}

export default new CitiesService();
