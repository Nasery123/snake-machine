import { appState } from "../AppState.js"
import { moneyServices } from "../Services/MoneyServices.js"
import { setText } from "../Utils/Writer.js"


function _drawMoney() {
    let money = appState.money

    let template = ''
    for (let i = 0; i < money; i++) {
        template += '💵'
    }
    setText('Money', template)
}










export class MoneyController {
    constructor() {
        console.log('money controller is it connected')
        appState.on("money", _drawMoney)
    }


    addMoney() {
        moneyServices.addMoney()
    }

    decreaseMoney() {
        moneyServices.decreaseMoney()
    }
}
