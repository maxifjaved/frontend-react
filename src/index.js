import './assets/index.css'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import { message } from 'antd'
// import decode from "jwt-decode";
import { refreshToken, userLoggedIn } from './actions/auth'
import apis from './apis/auth'
import * as serviceWorker from './serviceWorker'
import App from './App'
import configureStore from './configureStore'

import setAuthorizationHeader from './utils/setAuthorizationHeader'
const store = configureStore()
store.dispatch(userLoggedIn({}));

(async () => {
  if (localStorage.authApp) {
    setAuthorizationHeader(localStorage.authApp)
    try {
      let rtoken = await apis.refreshToken()
      console.log(rtoken)
    } catch (error) {
      console.error(error)
    }
  }
})()
// if (localStorage.authApp) {
//   // const payload = decode(localStorage.authApp);
//   // store.dispatch(userLoggedIn(payload));

//   setAuthorizationHeader(localStorage.authApp)
//   // debugger
//   apis.refreshToken().then((data) => {
//     localStorage.authApp = data.token
//     store.dispatch(userLoggedIn(data));
//   }).catch((data) => {
//     debugger;
//     localStorage.authApp = ''
//     store.dispatch(userLoggedIn({}));
//     let { errors } = data.response.data
//     message.error(errors.error || 'Error while refreshing token.');
//   })
// }
const renderApp = () =>
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Route component={App} />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
