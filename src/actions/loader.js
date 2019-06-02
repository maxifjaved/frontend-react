import { IS_LOADING } from '../types'

function isLoading(flag) {
  return {
    type: IS_LOADING,
    isLoading: flag
  };
}


export const loader = flag => dispatch => {
  dispatch(isLoading(flag));
}