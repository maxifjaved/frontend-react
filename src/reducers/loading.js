import { IS_LOADING } from "../types"

export default function user(state = { isLoading: false }, action = {}) {
  switch (action.type) {
    case IS_LOADING:
      return Object.assign({}, state, { isLoading: action.isLoading })
    default:
      return state
  }
}