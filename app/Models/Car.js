export default class Car {
  constructor(data) {
    this.make = data.make
    this.id = data._id
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return /*html*/ `
    <div class="col-3">
      <div class="card mt-3 shadow border-dark">
          <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <h4 class="card-title">Make:${this.make} | Model: ${this.model}</h4>
              <h5 class="card-title">Year: ${this.year}| Price: $${this.price} </h5>
              <p class="card-text text-center">${this.description}</p>
          </div>
          <div class="row">
              <div class="col mb-2 text-center">
              <button  class="btn btn-success btn-outline-light" onclick="app.carsController.bid('${this.id}')">Bid</button>
              <div class="col mt-2 mb-2 text-center">
              <button onclick="app.carsController.delete('${this.id}')" class="btn btn-danger btn-outline-light">Delete</button>
              </div>
              </div>
          </div>
      </div>
  </div>`
  }
}