import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "../utils/Axios.js";

class CarsService {
  async createCar(carData) {
    // NOTE 2nd argument on post method becomes the payload (request body)
    const response = await api.post('api/cars', carData)
    console.log('CREATED CAR 🏎️✨', response.data);
    const newCar = new Car(response.data)
    AppState.cars.push(newCar)
  }
  async getCars() {
    // NOTE axios is going to be used for network requests
    // NOTE you must specify which HTTP verb you are using by calling the correct method
    const response = await api.get('api/cars') // => 'https://sandbox.codeworksacademy.com/' + 'api/cars'
    // NOTE response.data from an axios response object will always be the response body
    console.log('GOT CARS 🏎️🏎️🏎️', response.data);
    const cars = response.data.map(pojo => new Car(pojo)) // pojo -> plain old javascript object
    // console.log(cars);
    AppState.cars = cars
  }
}

export const carsService = new CarsService()