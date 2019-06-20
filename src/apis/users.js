import axios from 'axios'

export default {
  users: () => axios.get("/api/users").then(res => res.data),
}