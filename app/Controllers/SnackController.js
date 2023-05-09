import { appState } from "../AppState.js"
import { moneyServices } from "../Services/MoneyServices.js";
import { saveState } from "../Utils/Store.js";
import { setHTML } from "../Utils/Writer.js";


function _drawSnack() {
    let foundSnack = appState.Snack
    let template = ''
    console.log(foundSnack);
    foundSnack.forEach(s => template += s.ListTemplate)
    setHTML('ask', template)

}
function _drawAsked() {
    let askSnack = appState.askSnack
    setHTML('ask', askSnack.ActiveTemplate)
}
// function _drawmySnack() {
//     let snack = appState.mySnack
//     let template = ''
//     snack.forEach(s => template += s.ListTemplate)
//     setHTML('mysnack', template)

// }


export class SnacksController {
    constructor() {
        console.log('is it connected or not')
        _drawSnack()
        // _drawmySnack()

        appState.on('askSnack', _drawAsked)
        // appState.on('mysnack', _drawmySnack)
    }


    buySnack(snackName) {
        console.log('buying this snack', snackName);
        if (appState.money <= 0) {
            window.alert(`you do not have enough money to buy ${snackName}`)
            return
        }
        moneyServices.decreaseMoney()

    }

























}
