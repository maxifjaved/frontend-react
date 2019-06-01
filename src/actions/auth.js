import { IS_LOADING } from '../types'
import api from '../apis/auth'

function loader(flag) {
  return {
    type: IS_LOADING,
    isLoading: flag
  };
}


export const register = data => async dispatch => {
  try {
    dispatch(loader(true));
    let user = await api.register(data)
    console.log(user)
  } catch (error) {
    console.error(error)
  }
  dispatch(loader(false));
}

export const login = data => async dispatch => {
  try {
    dispatch(loader(true));
    let user = await api.login(data)
    console.log(user)
  } catch (error) {
    console.error(error)
  }
  dispatch(loader(false));
}