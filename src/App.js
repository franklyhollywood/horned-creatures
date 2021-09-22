import React, { Component } from 'react'
import images from './data.js'
import './App.css' 

export default class App extends Component {
  /* Set up state - state is going to get updated with select options */
  state = {
    keyword: ''
  }
  filterAnimal = (e) => {
    this.setState({keyword: e.target.value})
  }



  
    /* State updates data or images */
  render() {

    const filteredAnimal = images.filter((animal) => { if (!this.state.keyword) {
      return true
    } else {
      return animal.keyword === this.state.keyword
    }
    }) 

    return (
      <div>
          <header>Pick your horned animal</header>
          {/* Dropdown selects images and hides unchosen images */}
          <select class = "select" onChange={this.filterAnimal}>
              <option class="option" value = "">All</option>
              <option value = "narwhal">Narwhal</option>
              <option value = "rhino">Rhino</option>
              <option value = "unicorn">Unicorn</option>
              <option value = "unilego">UniLego</option>
              <option value = "triceratops">Triceratops</option>
              <option value = "markhor">Markhor</option>
              <option value = "mouflon">Mouflon</option>
              <option value = "addax">Addax</option>
              <option value = "chameleon">Chameleon</option>
              <option value = "lizard">Lizard</option>
              <option value = "dragon">Dragon</option>
          </select>

          {/* Map through images and dynamically render li's */}
          <ul class="ul">
          {filteredAnimal.map((animal) => (
            <li class = "li"> <img class = "animalPics" src = {animal.url} alt = "animal"/> </li>
          )
            )}
           </ul>
            
           
            
      </div>
    )
  }
}
