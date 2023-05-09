import { MoneyController } from "./Controllers/MoneyController.js";
import { SnacksController } from "./Controllers/SnackController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  snacksController = new SnacksController();
  // TODO add the money controller here[]
  moneyController = new MoneyController();
}

window["app"] = new App();
