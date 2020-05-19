import _housesService from "../Services/HousesService.js";
import _store from "../store.js";

//Private
function _draw() {
  let template = ""
  let houses = _store.State.houses;
  houses.forEach(house => template += house.Template)
  document.getElementById("houses").innerHTML = template

}

//Public
export default class HousesController {
  constructor() {
    _store.subscribe("houses", _draw);
  }
  bid(houseId) {
    _housesService.bid(houseId)
  }
  delete(houseId) {
    _housesService.delete(houseId)
  }

  addHouse(event) {
    event.preventDefault()
    let formData = event.target
    let newHouseObj = {
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value,
      levels: formData.levels.value,
      price: formData.price.value,
      year: formData.year.value,
    }
    _housesService.create(newHouseObj)
    formData.reset()
  }

  switchHouses() {
    document.getElementById("carForm").classList.add("hidden")
    document.getElementById("cars").classList.add("hidden")
    document.getElementById("jobForm").classList.add("hidden")
    document.getElementById("jobs").classList.add("hidden")
    document.getElementById("houses").classList.remove("hidden")
    document.getElementById("houseForm").classList.remove("hidden")
    _housesService.switchHouses()

  }


}