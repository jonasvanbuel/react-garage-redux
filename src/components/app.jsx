import React from 'react';
import { Link } from 'react-router-dom';

// Components
import CarsIndex from '../containers/cars_index';


const App = () => {
  return (
    <div className="app">
      <div className="garage-info ">
        <Link to="/new">
          <button type="button" className="btn btn-primary">Add car</button>
        </Link>
      </div>
      <CarsIndex />
    </div>
  );
};

export default App;
