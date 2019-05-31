import { IS_LOADING } from '../types'
export const register = data => dispatch => {
  console.log('i am the action of register')
  dispatch({
    type: IS_LOADING,
    isLoading: true
  });
}