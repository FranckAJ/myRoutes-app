import {DO_AUTH, GET_AUTH} from "../actions/auth";
import firebase from "../../helpers/firebase";

/**
 *
 * @type {{user: string}}
 */
const state = {
  user: {}
}

/**
 *
 * @type {{getUser: (function(*): string)}}
 */
const getters = {
  [GET_AUTH]: state => state.user
}

/**
 *
 * @type {{}}
 */
const actions = {
  [DO_AUTH]: ({commit}, user) => {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((response) => {
          commit(DO_AUTH, response.user);
          resolve(response.user);
        })
        .catch((err) => {
          reject(err);
        });
    });

  }
};

/**
 *
 * @type {{}}
 */
const mutations = {
  [DO_AUTH]: (state, response) => {
    state.user = response
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}

