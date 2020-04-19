import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import CarDetails from '../components/car_details';

// Actions
import { fetchCar } from '../actions/index';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }
    return (
      <div className="right-window">
        <CarDetails car={this.props.car} />
        <Link className="link-back" to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(el => el.id === idFromUrl);
  return { car };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
