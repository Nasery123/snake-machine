import { appState } from "../AppState.js";


class MoneyServices {
    addMoney() {
        appState.money++;
        console.log('making money', appState.money);

    }
    decreaseMoney() {
        appState.money--;
    }

}
export const moneyServices = new MoneyServices();
