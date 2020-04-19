import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

// Components
// import Car from '../components/car';

// Actions
import { createCar } from '../actions/index';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, (post) => {
      this.props.history.push('/');
      return post;
    });
  }

  // 'handleSubmit' below gets passed to component's props by 'redux-form'.
  // 'values' is a default redux-form argument.
  // You need to pass your custom onSubmit function to it!
  render() {
    return (
      <div className="right-window">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>
            <label htmlFor="brand">Brand</label>
            <Field name="brand" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="model">Model</label>
            <Field name="model" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="owner">Owner</label>
            <Field name="owner" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="plate">Plate</label>
            <Field name="plate" component="input" type="text" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


// Make actions available
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createCar }, dispatch);
}

export default reduxForm({ form: 'newCarForm' })(
  connect(null, mapDispatchToProps)(CarsNew)
);
