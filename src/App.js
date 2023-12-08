import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import logo from './img/banda_dzhpg.jpg'
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
  constructor(props) {
    super(props)
    this.state = {
      helpText:'Help text',
      userData: ""
    }
    this.inputClick=this.inputClick.bind(this)
  }
  componentDidUpdate(prevProp){
    if(this.state.helpText!=="Help")
    console.log("Some")
  }
  render ()  { 
    return (<div className="name">
    <Header title="Шапка сайта" pizda="fdsafsd"/>
    {/* <Header title="Шапка стттайта"/> */}

  <h1>{this.state.helpText}</h1>
  <h2>{this.state.userData}</h2>
  <input placeholder={this.state.helpText}
  onChange={event => this.setState({userData: event.target.value})}
  onClick={this.inputClick} onMouseEnter={this.mouseOver} />
  <p>{this.state.helpText==="Helptext!"?"Yes":"No"}</p>
  <Image image={logo}/>
  <img src={logo}/>
  <MyInput/>
</div>)
}
inputClick(){
  this.setState({helpText: "Changed"})
  console.log('Clicked')}
mouseOver() {console.log('Clicked')}
}
export default App



 function MyInput() {
  const [text, setText] = useState('hello');

  function handleChange(e) {
      setText(e.target.toString());
  }

  return (
      <div>
          <input value={text} onChange={handleChange} />
          <p>You typed: {text}</p>
          <button onClick={() => setText('hello')}>
              Reset
          </button>
      </div>
  );
}