import { USERS_DATA } from '../types'
import api from '../apis/users'

export const setUsers = users => ({
  type: USERS_DATA,
  users
})

export const users = () => dispatch => {
  return api.users().then(data => {
    dispatch(setUsers(data.users))
  })
}