const BASE_URL = 'https://wagon-garage-api.herokuapp.com/garage-jonas/cars';

export const FETCH_CARS = 'FETCH_CARS';
export const CAR_CREATED = 'CAR_CREATED';

export function fetchCars() {
  const promise = fetch(BASE_URL).then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createCar(data) {
  // const promise = fetch(BASE_URL, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(body)
  // })
  //   .then(response => response.json());

  // return {
  //   type: CAR_CREATED,
  //   payload: promise
  // };
}
