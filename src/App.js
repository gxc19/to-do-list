import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    list: [],
    currentInput: "",
  }

  addHandler = e => {
    this.setState({ currentInput: e.target.value })
  }

  submit = () => {
    let storeInput = this.state.list
    if(storeInput === null || storeInput === ""){
      alert("Please Type In The Space Below")
      return false
    }
    storeInput.push(this.state.currentInput)
    this.setState({list: storeInput, currentInput: ""})
    console.log("Hi o/")
  }

  removeHandler = index => {
    let storeList = this.state.list
    storeList.splice(index, 1)
    this.setState({ list: storeList })
  }

  enterHandler = (event) => {
    if (event.key === 'Enter'){
      this.submit()
    }
  }

  render () {
    return (
      <div className="container">
        <div className="title">
          <h1>To-Do-List</h1>
        </div>
        <div className="to-do-list">
        <button className="button1" onClick={this.submit}>Add</button>
        <input className="text" type="text"  placeholder="Type Here" value={this.state.currentInput} onChange={this.addHandler} onKeyPress={this.enterHandler}/>
        {this.state.list.map((savedInput, index) => {
          return (
            <div className="list">
              <button className="button2" key={index} onClick={() => this.removeHandler(index)}/>
              <p>{savedInput}</p>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

export default App;