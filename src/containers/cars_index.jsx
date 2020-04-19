import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Car from '../components/car';

// Actions
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  render() {
    return (
      <div className="right-window">
        {this.props.cars.map((car) => {
          return (
            <Link to={`/cars/${car.id}`}>
              <Car car={car} key={car.id} />;
            </Link>
          );
        })}
      </div>
    );
  }
}

// Make state available
function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

// Make actions available
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
