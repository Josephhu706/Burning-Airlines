import React, { Component } from 'react'

export default class Flight extends Component {
    constructor(props){
        super()
        console.log(props)
        this.state={
            seats: Array(12).fill(null),
        }
    }
  render() {
    
    return (
      <div>FLIGHT COMING SOON</div>
    )
  }
}
