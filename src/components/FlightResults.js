import React, { Component } from 'react';


const FlightResults = (props) => {
  return (

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
                    <td> { flight.id }</td>
                    <td> { flight.origin + ' > ' + flight.destination }</td>
                    <td> { flight.airplane_id }</td>
                </tr> 
                ) }
            </tbody>
        </table>
    </div>

  );
};


export default FlightResults;