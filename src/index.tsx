import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import App from './pages/index'
import { Provider } from 'react-redux'
import configStore from './core/store/index'
import { BrowserRouter as Router} from 'react-router-dom'

const store = configStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
