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

 


    // componentDidMount() {

    //     const fetchFlights = () => {
    //         axios(SERVER_URL).then((response) => {
    //             this.setState({flights: response.data});
    //             setTimeout(fetchFlights, 3000);
    //         });
    //     };
    //     fetchFlights();
    // }


  render() {
    return (
        <div>
            <SearchForm onSubmit={this.fetchFlights}/>
            <FlightResults flights={this.state.flights}/>
            <Router>
                <Routes>
                    <Route path="/flight" element={<Flight/>}/>
                </Routes>
            </Router>   
        </div>
    );
  }
}
