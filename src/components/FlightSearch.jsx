import React, { Component } from 'react'
import axios from 'axios'
import FlightResults from './FlightResults'
import SearchForm from './SearchForm'

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
        this.fetchFlights = this.fetchFlights.bind(this)
    }

    fetchFlights(state){
        console.log(state)
        let flights = [...this.state.flights]
        let matchedFlights = []

        flights.forEach(flight=>{
            console.log(state.destination)
            
            if ((state.destination == flight.destination) && state.origin == flight.origin){
                matchedFlights.push(flight)
            }
        })
        console.log(matchedFlights)
    }


  render() {
    return (
        <div>
            <FlightResults flights={this.state.flights}/>
            <SearchForm onSubmit={this.fetchFlights}/>
        </div>
    )
  }
}

