import React, { Component } from 'react'


export default class Dropdown extends Component {
    render() {

      


        return (
            <select className = "select" value = {this.props.currentValue} onChange={this.props.handleChange}>
            <option className = "option" value = "">All</option>
            {this.props.options.map(option => <option value = {option}>{option}</option>)}
      </select>
        )
    }
}







{/*<option value = "narwhal">Narwhal</option>
            <option value = "rhino">Rhino</option>
            <option value = "unicorn">Unicorn</option>
            <option value = "unilego">UniLego</option>
            <option value = "triceratops">Triceratops</option>
            <option value = "markhor">Markhor</option>
            <option value = "mouflon">Mouflon</option>
            <option value = "addax">Addax</option>
            <option value = "chameleon">Chameleon</option>
            <option value = "lizard">Lizard</option>
<option value = "dragon">Dragon</option>*/}