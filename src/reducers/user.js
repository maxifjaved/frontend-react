import { USER_LOGGED_IN, USER_LOGGED_OUT, USERS_DATA } from "../types"

const initState = {
  auth: {},
  users: {}
}
export default function user(state = initState, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, ...{ auth: action.user } }
    case USER_LOGGED_OUT:
      return { ...state, ...{ auth: action.user } }
    case USERS_DATA:
      return { ...state, ...{ users: action.users } }
    default:
      return state
  }
}