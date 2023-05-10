export class Snack {

    constructor(data) {
        this.name = data.name;
        this.number = data.number;
        this.price = data.price;
    }

    get ListTemplate() {
        return `<div class="snack text-center selectable" onclick="app.snacksController.buySnack('${this.name}')">
        <h1>${this.name}</h1>
        <h1 title = "${this.name}">$${this.price}</h1>
   </div>`



    }
    get ActiveTemplate() {
        return `
    <div class="col-8">
        <div class="elevation-5 rounded text-center p-3">
            <h1 class="emoji">${this.name}</h1>
            <h2>${this.number}</h2>
             <h3>price: ${this.price}</h3>
        </div>
    </div>`
    }





}
