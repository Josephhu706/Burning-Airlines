import React, { Component } from 'react'

export default class Flight extends Component {
    constructor(props){
      super(props)

  }

  render() {
    console.log(this.props)
    return (

      <table>
            <tbody>
                <tr>
                  <th>{this.props.flight.date}</th>
                  <th>{this.props.flight.flight_id}</th>
                  <th>{this.props.flight.origin}>{this.props.flight.destination}</th>
                </tr>
            </tbody>
      </table> 
      
    )
  }
}
