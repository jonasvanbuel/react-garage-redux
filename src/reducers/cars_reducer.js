import { FETCH_CARS, CAR_CREATED } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    // case CAR_CREATED: {
    //   const copiedState = state.slice(0);
    //   copiedState.push(action.payload);
    //   return copiedState;
    // }
    default:
      return state;
  }
}
