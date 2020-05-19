export default class Job {
  constructor(data) {
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    this.id = data._id
  }

  get Template() {
    return /*html*/ `
      <div class="col-2">
      <div class="card mt-3 shadow border-dark">
          <div class="card-top bg-primary text-light text-center">
              <h4> ${this.jobTitle}</h4>
          </div>
          <div class="card-body">
              <h4 class="card-title">Company: ${this.company} </h4>
              <h5 class="card-title"> Hours: ${this.hours} | Rate: $${this.rate} </h5>
              <p class="card-text text-center">${this.description}</p>
          </div>
          <div class="row">
              <div class="col mb-2 text-center">
                  <button class="btn btn-success btn-outline-light"
                      onclick="app.jobsController.apply('${this.id}')">apply</button>
                  <div class="col mt-2 mb-2 text-center">
                      <button onclick="app.jobsController.delete('${this.id}')"
                          class="btn btn-danger btn-outline-light">Delete</button>
                  </div>
              </div>
          </div>
      </div>
  </div>`
  }
}