import FlightSearch from "./FlightSearch";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flight from "./Flight";

function App() {
  return (
    <div className="App">
      <FlightSearch/>
    </div>
  );
}

export default App;
