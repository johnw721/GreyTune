import Header from './components/Header';
import Selection from './components/Selection';
import {Component} from 'react';

import './App.css';

class App extends Component{
// Every Musical Note
  state=[
    'A','A#','B','C','C#','D','D#','E','F','F#','G','G#'
  ]

// Receives a string and returns the state index equivalent one to the right
halfStep = ()=>{
 //Compare the string value of the parameter to the array values
 //If the value of the parameter matches a value take the index of that value and
 // add one to it
 //If index is greater than state array length then you reverse array method and then add
 //If however no value matches return please enter a valid note
}
  render(){
    return (
    <div className="App">
      <Header/>
      <Selection note={this.state} />
    </div>
  );
    }
}

export default App;
