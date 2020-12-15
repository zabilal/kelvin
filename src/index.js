import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from "react-redux";
// import store from "./store";


import App from './App'

// const ContextA = React.createContext();

ReactDOM.render(
//   <Provider store={store} context={ContextA}>
    <App />,
//   </Provider>,
  document.querySelector("#root")
);