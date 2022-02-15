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
 HandleScale=(e)=>{
  var Root = e.target.value
  var halfStep = this.props.halfStep(Root);
  var wholeStep = this.props.wholeStep(Root);
   return(
     <div>
      (//This is an example: This is the formula for the Major Scale: W-W-H-W-W-W-H)
       Root, {wholeStep()}, {wholeStep(wholeStep)}, {halfStep(wholeStep)},
       {wholeStep(halfStep)},{wholeStep(wholeStep)},{wholeStep(wholeStep)},{halfStep(wholeStep)}
     </div>
   )
 }
 HandleChord=()=>{
  return(
    <div>

    </div>
  )
 }
 HandleProgression=()=>{
  return(
    <div>

    </div>
  )
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
 onChangeValue=(event)=>{
   console.log(event.target.value);
  }
  render() {
    return (
      <div className="Container">
        <div className="columnOne">
          <div className='inputFields'>
            <div className='mT'>
              Music Theory
            </div>
            <div className='Notes' onChange={this.onChangeValue.note}>
              <input type="radio" id="noteA" name="tone"  value="A"/>
              <label for="noteA">A</label>
              <input type="radio" id="noteB" name="tone"  value="B"/>
              <label for="noteB">B</label>
              <input type="radio" id="noteC" name="tone"  value="C"/>
              <label for="noteC">C</label>
              <input type="radio" id="noteD" name="tone"  value="D"/>
              <label for="noteD">D</label>
              <input type="radio" id="noteE" name="tone"  value="E"/>
              <label for="noteE">E</label>
              <input type="radio" id="noteF" name="tone"  value="F"/>
              <label for="noteF">F</label>
              <input type="radio" id="noteG" name="tone"  value="G"/>
              <label for="noteG">G</label>
              <select onChange={this.onChangeValue}>
                <option value="#">#</option>
                <option value=""></option>
                <option value="b">b</option>
              </select>
            </div>
            <div className="miniMenu">
              <div className="inline">
                <button onClick={this.HandleScale}>Scale</button>
                <button onClick={this.HandleChord}>Chord</button>
                <button onClick={this.HandleProgression}>Progression</button>
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
