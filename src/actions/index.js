const BASE_URL = 'https://wagon-garage-api.herokuapp.com/garage-jonas/cars';

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_CREATED = 'CAR_CREATED';

export function fetchCars() {
  const promise = fetch(BASE_URL).then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const endpoint = `https://wagon-garage-api.herokuapp.com/cars/${id}`;
  const promise = fetch(endpoint).then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function createCar(values, callback) {
  const promise = fetch(BASE_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(response => response.json())
    .then(callback);

  return {
    type: CAR_CREATED,
    payload: promise
  };
}
