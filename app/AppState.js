import { Snack } from "./Models/Snacks.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])


  money = 0;


  Snack = [
    new Snack({ name: "doritos", price: 1.2, number: 1 }),
    new Snack({ name: 'chips', price: 2.3, number: 2 }),
    new Snack({ name: 'tokis', price: 2.5, number: 3 }),
    new Snack({ name: 'lays', price: 3.2, number: 4 })

  ]
  // Snack = []

  askSnack = null;

  mySnack = loadState('mySnack', [Snack])
}
// NOTE don't touch!!
export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
