import React, { Component } from 'react'
import './selection.scss'

export default class Selection extends Component {
 state={
    input: ''
 }

 handleChange=(e)=>{
   console.log(this.state)
   this.setState({input: e.target.value})
 }
 handleResult=(e)=>{
 //  'A','A#','B','C','C#','D','D#','E','F','F#','G','G#'
  /*this.props.note.map( n => {
    if(n === e.target.value){
      var number= note.IndexOf(n)
      var cutOff = note.slice(0,number);
      var Addon = note.slice(number);
      var scale = Addon.concat(cutOff);
      return
      <div>{scale}</div>;
    }
  })*/
  console.log(this.props);
  console.log(e.target.value)
 }
  render() {
    return (
      <div className="Container">
        <div className="columnOne">
          <div className='inputFields'>
            <div className='mT'>
              Music Theory
            </div>
            <div className='Notes'>
              <input type="radio" id="noteA"  value="A"/>
              <label for="noteA">A</label>
              <input type="radio" id="noteB"  value="B"/>
              <label for="noteB">B</label>
              <input type="radio" id="noteC"  value="C"/>
              <label for="noteC">C</label>
              <input type="radio" id="noteD"  value="D"/>
              <label for="noteD">D</label>
              <input type="radio" id="noteE"  value="E"/>
              <label for="noteE">E</label>
              <input type="radio" id="noteF"  value="F"/>
              <label for="noteF">F</label>
              <input type="radio" id="noteG"  value="G"/>
              <label for="noteG">G</label>
              <select>
                <option>#</option>
                <option></option>
                <option>b</option>
              </select>
            </div>
            <div className='miniMenu'>
              <div className="inline">
                <button>Scale</button>
                <button>Chord</button>
                <button>Progression</button>
              </div>
            </div>
          </div>
        </div>
        <div className="columnTwo">
          <button className='History'>
            Clear
          </button>
        </div>
      </div>
    )
  }
}
