import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import '../assets/stylesheets/application.scss';

// Components
import CarsIndex from './containers/cars_index';
import CarsNew from './containers/cars_new';
import CarsShow from './containers/cars_show';

// Reducers
import carsReducer from './reducers/cars_reducer';

const initialState = {
  cars: []
};

const reducers = combineReducers({
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <div className="app">
          <div className="garage-info ">
            <Link to="/new">
              <button type="button" className="btn btn-primary">Add car</button>
            </Link>
          </div>
          <Route path="/" exact component={CarsIndex} />
          <Route path="/new" exact component={CarsNew} />
          <Route path="/cars/:id" component={CarsShow} />
        </div>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
