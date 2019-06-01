import axios from 'axios'

export default {
  login: credentials => axios.post("/api/auth/login-via-local", credentials).then(res => res.data.user),
  register: data => axios.post("/api/auth/signup", data).then(res => res.data.user),
  confirm: token => axios.post("/api/auth/confirmation", { token }).then(res => res.data.user),
  resetPasswordRequest: email => axios.post("/api/auth/reset_password_request", { email }),
  validateToken: token => axios.post("/api/auth/validate_token", { token }),
  resetPassword: data => axios.post("/api/auth/reset_password", { data })
}