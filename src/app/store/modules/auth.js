import {
  AUTH_ERROR,
  AUTH_LOGOUT,
  AUTH_REGISTER_USER_ERROR,
  AUTH_REGISTER_USER_REQUEST, AUTH_REGISTER_USER_SUCCESS,
  AUTH_REQUEST,
  AUTH_SUCCESS
} from "../actions/auth";

import authService from "./../../services/Auth";

/**
 *
 * @type {{user: string}}
 */
const state = {
  status: '',
  isAuth: false,
  user: {}
}

/**
 *
 * @type {{getUser: (function(*): string)}}
 */
const getters = {
  getUser: state => state.user
}

/**
 *
 * @type {{}}
 */
const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
    commit(AUTH_REQUEST);
    return new Promise((resolve, reject) => {
      authService.doAuthentication(user.email, user.password)
        .then((response) => {
          let user = authService.resolveFirebaseDto(response.user);
          if (user.emailVerified) {
            commit(AUTH_SUCCESS, user);
          }
          resolve(user.emailVerified);
        })
        .catch((err) => {
          commit(AUTH_ERROR);
          reject(err);
        });
    });
  },

  [AUTH_REGISTER_USER_REQUEST]: ({commit}, user) => {
    return new Promise((resolve, reject) => {
      authService.createUser(user)
        .then(() => {
          commit(AUTH_REGISTER_USER_SUCCESS);
          resolve();
        })
        .catch((err) => {
          commit(AUTH_REGISTER_USER_ERROR);
          reject(err);
        })
    });
  },

  [AUTH_LOGOUT]: ({commit}) => {
    return new Promise((resolve, reject) => {
      authService.doLogout().then(() => {
        commit(AUTH_LOGOUT);
        resolve();
      })
    });
  }
};

/**
 *
 * @type {{}}
 */
const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading';
  },

  [AUTH_SUCCESS]: (state, data) => {
    state.status = 'success';
    state.user = data;
    state.isAuth = true;
  },

  [AUTH_ERROR]: (state) => {
    state.status = 'error';
  },

  [AUTH_LOGOUT]: (state) => {
    state.user = {};
    state.isAuth = false;
  },

  [AUTH_REGISTER_USER_REQUEST]: (state) => {
    state.status = 'loading';
  },

  [AUTH_REGISTER_USER_SUCCESS]: (state) => {
    state.status = 'success';
  },

  [AUTH_REGISTER_USER_ERROR]: (state) => {
    state.status = 'error';
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}

