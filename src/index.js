import React from "react"
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { createStore } from "redux";

import AppIndex from './App'
import reducers from './reducers'



class App extends React.Component{



  render(){
    

      return(

        <div><AppIndex /></div>
    
        )
    

  }
}


ReactDOM.render(
 <Provider store={createStore(reducers)}>
   <App/>
 </Provider> ,
  document.getElementById('root')
);