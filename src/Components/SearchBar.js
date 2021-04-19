import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(){
        super()
        this.state={
            input: ''
        }
        
    }
  

    render() {

        return (
            <div>
                 <div className="home">
                    <select className='selection'>
                        <option value="Filters">Filters</option>
                    </select>
                    <input type="text" onChange={this.props.handleInput} placeholder='Serach for isssues' value={this.props.input} ></input>
                    <button>Labels</button>
                    <button>Milestones</button>
                    <button>New issue</button>
                </div>
            </div>
        )
    }
}
