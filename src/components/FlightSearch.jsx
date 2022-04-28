import React, { Component } from 'react'
import axios from 'axios'
import FlightResults from './FlightResults'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flight from './Flight';
import SearchForm from './SearchForm'

const SERVER_URL = 'http://localhost:3000/flights.json';


export default class FlightSearch extends Component {
    constructor(){
        super()
        this.state={
            flights:[],
            flightResults:[]
        }
        this.fetchFlights = this.fetchFlights.bind(this);
    }


    fetchFlights(state){
        axios(SERVER_URL).then((response) => {
            let matchedFlights = [];
            response.data.forEach(flight=>{
                if ((state.destination == flight.destination) && (state.origin == flight.origin)){
                    matchedFlights.push(flight);
                    this.setState({flights: matchedFlights});
                };
            });
        });
    }


  render() {
    return (
        <div>
            <SearchForm onSubmit={this.fetchFlights}/>
            <FlightResults flights={this.state.flights}/>
        </div>
    );
  }
}
