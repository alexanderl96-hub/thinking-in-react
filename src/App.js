import React, { Component } from 'react'
import SearchBar from "./Components/SearchBar.js"
import Issues from "./Components/Issues"
import './App.css';
import apiResponse from './apiResponse.js';


class App extends Component {
  constructor(){
    super()
    this.state={
      inputSear: '',
      filterI: apiResponse
    }
  }
  handleInput= (e)=>{

    let lettre = e.target.value
    if(lettre.length > 0){
      let fitroo = apiResponse.filter((issue)=>{
        if(issue.title.includes(lettre)){
          return true
        }
        return false
      })
      console.log(fitroo)
      this.setState({
        inputSear: e.target.value,
        filterI: fitroo})
    }else{
      this.setState({
        inputSear: e.target.value, 
        filterI: apiResponse})
    }
    
} 
  render() {
    return (
      <div>
        Hello
       <SearchBar handleInput={this.handleInput} inputSear={this.state.inputSear}/>
        <Issues issues={this.state.filterI}/>

      </div>
    )
  }
}

export default App
