import React, { Component } from 'react'
import axios from 'axios'
import FlightResults from './SearchResults'

export default class FlightSearch extends Component {
    constructor(){
        super()
        this.state={
            flights:[
                {
                    id: 1,
                    airplane_id: 757,
                    origin: 'JFK',
                    destination: 'SFO',
                    date: '3/1/13'
                },
                {
                    id: 2,
                    airplane_id: 747,
                    origin: 'JFK',
                    destination: 'SFO',
                    date: '3/3/13'
                },
                {
                    id: 3,
                    airplane_id: 757,
                    origin: 'JFK',
                    destination: 'SFO',
                    date: '3/8/13'
                },
            ]
        }
    }

    fetchFlights(q){


    }


  render() {
    return (
        <div>
            <FlightResults flights={this.state.flights}/>
        </div>
    )
  }
}

