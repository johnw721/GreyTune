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
halfStep = (root)=>{
 //Compare the string value of the parameter to the array values
 const state = this.props.state;

 const Tonic= state.find(Equal());
 function Equal(root){
    return state === root
 }
 //If the value of the parameter matches a value take the index of that value and
 // add one to it
 //If index is greater than state array length then you reverse array method and then add
 //If however no value matches return please enter a valid note
 const halfStep = state.IndexOf(Tonic) + 1;

 return halfStep;

}

wholeStep = (root)=>{
  //Compare the string value of the parameter to the array values
  const state = this.props.state;
 
  const Tonic= state.find(Equal());
  function Equal(root){
     return state === root
  }
  //If the value of the parameter matches a value take the index of that value and
  // add one to it
  //If index is greater than state array length then you reverse array method and then add
  //If however no value matches return please enter a valid note
  const wholeStep = state.IndexOf(Tonic) + 2;

  //This if function serves as a exception in the event
  // that wholeStep returned result is greater than the index
  if (wholeStep > state.length)
{
  var extend= state(2).fill(state);
  const overRun = extend.IndexOf(Tonic)+2;
  //This is to save on space and clean up the code
  extend = [];
  return overRun
} 
  return wholeStep;
 
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
