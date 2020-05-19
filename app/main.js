import CarsController from "./Controllers/CarsController.js";
import JobsController from "./Controllers/JobsController.js"
import HousesController from "./Controllers/HousesController.js";

class App {
  constructor() {
    this.carsController = new CarsController();
    this.jobsController = new JobsController();
    this.housesController = new HousesController();
  }
}

window["app"] = new App();
