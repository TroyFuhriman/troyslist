import _carsService from "../Services/CarsService.js";
import _store from "../store.js";

//Private
function _draw() {
  let template = ""
  let cars = _store.State.cars;
  cars.forEach(car => template += car.Template)
  document.getElementById("cars").innerHTML = template
}

//Public
export default class CarsController {
  constructor() {
    _store.subscribe("cars", _draw);
  }


  bid(carId) {
    _carsService.bid(carId)

  }
  delete(carId) {
    _carsService.delete(carId)
  }
  addCar(event) {
    event.preventDefault();
    let formData = event.target
    let newCarObj = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value,
    }
    _carsService.create(newCarObj)
    formData.reset()
  }
  switchCars() {
    document.getElementById("carForm").classList.remove("hidden")
    document.getElementById("cars").classList.remove("hidden")
    document.getElementById("jobForm").classList.add("hidden")
    document.getElementById("jobs").classList.add("hidden")
    document.getElementById("houses").classList.add("hidden")
    document.getElementById("houseForm").classList.add("hidden")
    _carsService.switchCars()

  }
}
