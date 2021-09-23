import React, { Component } from 'react'
import Dropdown from './Dropdown.js'
import images from './data.js'
import ImageList from './ImageList.js'
import './App.css' 

export default class App extends Component {
  /* Set up state - state is going to get updated with select options */
  state = {
    keyword: '',
    horns: ''
  }
  filterKeyword = (e) => {
    this.setState({keyword: e.target.value})
  }

  filterHorns = (e) => {
    this.setState({horns: Number(e.target.value)})
  }
  
    /* State updates data or images */
  render() {
console.log(this.state.keyword);
    
const filteredAnimal = images.filter((animal) => { if (!this.state.keyword) {
  return true
} else {
  return animal.keyword === this.state.keyword
}})
  .filter((animal) => { if (!this.state.horns) {
    return true
  } else {
    return animal.horns === this.state.horns
  }
  }) 
    

    return (
      <>
      <div className = "container">
          <header>Pick your Filtered animal</header> 
          <br />
          
          <Dropdown handleChange = {this.filterHorns} currentValue = {this.state.horns} options = {[1, 2, 3, 100]} />
          <Dropdown handleChange = {this.filterKeyword} currentValue = {this.state.keyword} options = {["narwahl", "rhino", "unicorn", "unilego", "triceratops", "markhor", "mouflon", "addax", "chameleon", "lizard", "dragon"]} />
         
        </div>
      <ImageList filteredAnimal = {filteredAnimal}/>

      



      </>
    )
    }
}

