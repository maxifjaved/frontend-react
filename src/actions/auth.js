import { USER_LOGGED_IN } from '../types'
import api from '../apis/auth'

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const register = data => dispatch => {
  return api.register(data)
    .then((user) => {
      dispatch(userLoggedIn(user));
    })
}

export const login = data => dispatch => {
  return api.login(data)
    .then((user) => {
      dispatch(userLoggedIn(user));
    })
}