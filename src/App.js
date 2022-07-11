import './App.css';

import React, { Component } from 'react'

export class App extends Component {

  state = {
    enteredInput:'',
    output:'',
    prt:0
  }

  inputHandler = (event)=>{
    if(this.state.prt===0){
      var inp = event.target.innerText
    // alert(inp)
    var stateinput = this.state.enteredInput
    if(stateinput===0)
    var expression = inp
    else
    expression = stateinput + inp
    // var res = eval(expression)
    }
    if(this.state.prt===1){
      inp = event.target.innerText
      stateinput = this.state.output
      if(stateinput===0)
      expression = inp
      else
      expression = stateinput + inp
      // res = eval(expression)
    }
    try{
      this.setState({
        enteredInput:expression,
        prt:0,
        // output:res
      })
    }
    catch(e){
      alert(e);
    }
    
  }

  outputHandler = (event)=>{
    event.preventDefault()
    // alert('=')
    if(this.state.enteredInput==='')
    var res = ''
    else
    res = eval(this.state.enteredInput)
    this.setState({
      output:res,
      enteredInput:'',
      prt:1
    })
  }

  acHandler = (event)=>{
    this.setState({
      enteredInput:0,
      output:'',
      prt:0
    })
  }

  delete =(event)=>{
    var inp = this.state.enteredInput
    inp = inp.substring(0,inp.length-1)
    this.setState({
      enteredInput:inp
    })
  }
  render() {
    return (
      <div className="App">
      <div className='inputs'>
      <input className='expression' disabled value={this.state.enteredInput}/>
     <input className='result' disabled value={this.state.output}/>
      </div>
     <button className='ac' onClick={this.acHandler}>Ac</button>
     <button onClick={this.delete}>DEL</button>
     <button onClick={this.inputHandler}>/</button>
     <button onClick={this.inputHandler}>1</button>
     <button onClick={this.inputHandler}>2</button>
     <button onClick={this.inputHandler}>3</button>
     <button onClick={this.inputHandler}>*</button>
     <button onClick={this.inputHandler}>4</button>
     <button onClick={this.inputHandler}>5</button>
     <button onClick={this.inputHandler}>6</button>
     <button onClick={this.inputHandler}>+</button>
     <button onClick={this.inputHandler}>7</button>
     <button onClick={this.inputHandler}>8</button>
     <button onClick={this.inputHandler}>9</button>
     <button onClick={this.inputHandler}>-</button>
     <button onClick={this.inputHandler}>.</button>
     <button onClick={this.inputHandler}>0</button>
     <button className='equalto' onClick={this.outputHandler}>=</button>
    </div>
    )
  }
}

export default App
