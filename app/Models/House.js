export default class House {
    constructor(data) {
        this.bedrooms = data.bedrooms
        this.id = data._id
        this.bathrooms = data.bathrooms
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.levels = data.levels
    }

    get Template() {
        return /*html*/ `
    <div class="col-3">
    <div class="card mt-3 shadow border-dark">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h5 class="card-title text-center">bedrooms:${this.bedrooms} | bathrooms: ${this.bathrooms}
            </h5>
            <h5 class="text-center">levels: ${this.levels}</h5>
            <h5 class="card-title text-center">Year: ${this.year}| Price: $${this.price} </h5>
            <p class="card-text text-center">${this.description}</p>
        </div>
        <div class="row">
            <div class="col mb-2 text-center">
                <button class="btn btn-success btn-outline-light"
                    onclick="app.housesController.bid('${this.id}')">Bid</button>
                <div class="col mt-2 mb-2 text-center">
                    <button onclick="app.housesController.delete('${this.id}')"
                        class="btn btn-danger btn-outline-light">Delete</button>
                </div>
            </div>
        </div>
    </div>
</div>
`
    }
}