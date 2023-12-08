import React from 'react';
import Header from './components/Header';

import { useState } from 'react';
// import ReactDOMClient from 'react-dom/client';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


 const helpText= 'Help text!'

class App extends React.Component {
  

  render ()  { 
    return (<div >
    <Header title="Список пользователей" />
   
</div>)
}

}
export default App



