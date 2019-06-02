import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types"

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return Object.assign({}, { ...state, ...action.user })
    case USER_LOGGED_OUT:
      debugger
      return Object.assign({}, { state, ...action.user })
    default:
      return state
  }
}