import React, { Component } from 'react'
import axios from 'axios'
import FlightResults from './FlightResults'

import SearchForm from './SearchForm'

const SERVER_URL = 'http://localhost:3000/flights.json';



export default class FlightSearch extends Component {
    constructor(){
        super()
        this.state={
            flights:[],
            flightResults:[]
        }

    }


    componentDidMount(state){


        const fetchFlights=()=>{

            axios(SERVER_URL).then((response)=>{
     
                this.setState({flights: response.data})
                setTimeout(fetchFlights, 5000);
            })
        }
        
        fetchFlights();
    }

 


  render() {
    return (
        <div>

            <FlightResults flights={this.state.flights}/>
            <SearchForm onSubmit={this.fetchFlights}/>

        </div>
    );
  }
}
