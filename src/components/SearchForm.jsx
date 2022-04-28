import React, { Component } from 'react'

export default class SearchForm extends Component {
    constructor(){
        super();
        this.state={
            destination: '',
            origin: ''
        }

        this._handleChange = this._handleChange.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    _handleChange(event){
   
        if (event.target.className == 'origin'){
            this.setState({origin: event.target.value})
        }
        if (event.target.className == 'destination'){
            this.setState({destination: event.target.value})
        }
 
    }

    _handleSubmit(event){
        event.preventDefault();
        // console.log(this.state)
        this.props.onSubmit(this.state)    ;
    }

  render() {


    return (

      <form onSubmit={this._handleSubmit}>
        <div>
            <label htmlFor="origin">origin</label>
            <input className='origin' type="search" required placeholder='JKF' onChange={this._handleChange}  />
        </div>
        <div>
            <label htmlFor="destination">destination</label>
            <input className='destination' type="search" required placeholder='SFO' onChange={this._handleChange}  />
        </div>
        <button>Search Flights</button>
      </form>
    )
  }
}
