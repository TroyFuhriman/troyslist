import store from "../store.js";
import Car from "../Models/Car.js"


//@ts-ignore
let _api = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/cars',
  timeout: 15000,
})
class CarsService {
  switchCars() {
    this.getCars()
  }
  create(newCarObj) {
    _api.post("", newCarObj)
      .then(res => {
        console.log(res);
        this.getCars()
      })
      .catch(err => console.error(err))
  }


  constructor() {
    this.getCars()
  }



  getCars() {
    _api.get()
      .then(res => {
        let newCars = res.data.data.map(carData => new Car(carData))
        store.commit("cars", newCars);
      })
      .catch(error => console.error(error))
  }

  bid(carId) {
    let foundCar = store.State.cars.find(car => car.id == carId)
    if (foundCar) {
      foundCar.price += 100
      _api.put(carId, foundCar)
        .then(res => {
          this.getCars()
        })
        .catch(error => console.error(error))
    }
  }
  delete(carId) {
    _api.delete(carId)
      .then(res => {
        console.log(res);
        this.getCars()
      })
      .catch(err => console.log(err))
  }
}

const service = new CarsService();
export default service;