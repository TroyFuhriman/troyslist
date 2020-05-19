import store from "../store.js";
import House from "../Models/House.js"


//@ts-ignore
let _api = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/houses',
  timeout: 15000,
})
class HousesService {
  switchHouses() {
    this.getHouses()
  }
  create(newHouseObj) {
    _api.post("", newHouseObj)
      .then(res => {
        console.log(res);
        this.getHouses()
      })
      .catch(err => console.error(err))
  }
  delete(houseId) {
    _api.delete(houseId)
      .then(res => {
        this.getHouses()
      })
      .catch(err => console.error(err))
  }
  bid(houseId) {
    let foundHouse = store.State.houses.find(house => house.id == houseId)
    foundHouse.price += 1000
    _api.put(houseId, foundHouse)
      .then(res => {
        this.getHouses()
      })
      .catch(err => console.error(err))
  }
  constructor() {
    this.getHouses()
  }

  getHouses() {
    _api.get()
      .then(res => {
        let newHouses = res.data.data.map(houseData => new House(houseData))
        store.commit("houses", newHouses)
      })
      .catch(err => console.error(err))
  }

}

const service = new HousesService();
export default service;
