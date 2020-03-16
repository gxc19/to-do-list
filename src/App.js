import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    list: [],
    currentInput: "",
  }

  componentDidMount = async () => {
    const response = await fetch("http://localhost:3010/data")
    const data = await response.json()
    console.log(data)
    this.setState({list: data.data})
  }

  addHandler = e => {
    this.setState({ currentInput: e.target.value })
  }

  submit = () => {
    let storeInput = this.state.list
    if(this.state.currentInput === ""){
      return alert("Please Type In The Space Below")
    }
    storeInput.push({task: this.state.currentInput})
    this.setState({list: storeInput, currentInput: ""})
    console.log("Hi o/")

    fetch("http://localhost:3010/taskAdd", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
      task: this.state.currentInput
    })
  })
  }

  removeHandler = (index, task) => {
    let storeList = this.state.list
    storeList.splice(index, 1)
    this.setState({ list: storeList })

    fetch("http://localhost:3010/delete", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
      task: task
    })
  })
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
        <div className="list-box">
          {this.state.list.map((savedInput, index) => {
          return (
            <div className="list">
              <button className="button2" key={index} onClick={() => this.removeHandler(index, savedInput.task)}/>
              <p>{savedInput.task}</p>
            </div>
          )
        })}
        </div>
        
        </div>
      </div>
    )
  }
}

export default App;