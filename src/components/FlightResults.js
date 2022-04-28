import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Flight from './Flight'
import React, { Component } from 'react'
import FlightSearch from './FlightSearch';

export default class FlightResults extends Component {
    constructor(props){
        super(props);
        this.state={
            origin: '',
            destination: '',
            flight_id: '', 
            date: ''
        }
    }
  render() {
    return (
        <Router>
        <div>
            <h1>{this.props.FlightResults}</h1>
            <h2>Flight Search Results ({ this.props.flights.length })</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Flight</th>
                        <th>From > To</th>
                        <th>Plane</th>
                    </tr>
    
                    { this.props.flights.map((flight) =>
                    <tr key={ flight.id }> 
                        <td> { flight.date }</td>
                        <td>{flight.id}</td>
                        <td><Link to='/flight' onClick={()=>{this.setState({origin: flight.origin, destination: flight.destination, flight_id: flight.id, date: flight.date})}}>{flight.id}</Link></td>
                        <td> { flight.origin + ' > ' + flight.destination }</td>
                        <td> { flight.airplane_id }</td>
                    </tr> 
                    ) }
                </tbody>
            </table>
        </div>
        <Routes>
            <Route path='/flight' element={<Flight flight={this.state}/>}/>
        </Routes>
    </Router>
    )
  }
}



