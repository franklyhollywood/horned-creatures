import React, { Component } from 'react'


export default class ImageList extends Component {
    render() {
        return (
            <div>
            <ul className="ul">
            {this.props.filteredAnimal.map((animal) => (
              <li className = "li" key = {animal.title}> <img className = "animalPics" src = {animal.url} alt = "animal"/> </li>
            )
              )}
             </ul>  
            </div>
        )
    }
}
