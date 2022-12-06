import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { MobileComponent } from './Components/MobileComponent'
import { WebComponent } from './Components/WebComponent'
import { store } from './Components/store/store'
// @ts-ignore
import { Provider } from 'react-redux'

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  /*<React.StrictMode>*/
  document.documentElement.clientWidth

  < 620 ?
    <Provider store={store}>
      <MobileComponent />
    </Provider>
    :
    <Provider store={store}>
      <WebComponent />
    </Provider>


  /*</React.StrictMode>*/,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
