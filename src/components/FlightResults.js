import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const FlightResults = (props) => {
    console.log(props)
  return (
<Router>
    <div>
        <h1>{props.FlightResults}</h1>
        <h2>Flight Search Results ({ props.flights.length })</h2>
        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Flight</th>
                    <th>From > To</th>
                    <th>Plane</th>
                </tr>

                { props.flights.map((flight) =>
                <tr key={ flight.id }> 
                    <td> { flight.date }</td>
                    <td>{flight.id}</td>
                    <Link to="/flight"><td> { flight.id }</td></Link>
                    <td> { flight.origin + ' > ' + flight.destination }</td>
                    <td> { flight.airplane_id }</td>
                </tr> 
                ) }
            </tbody>
        </table>
    </div>
</Router>
  );
};


export default FlightResults;