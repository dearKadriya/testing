import {InputController} from "./InputController";
import {ButtonController} from "./ButtonController";
import {DOMBuilder} from "./DOMBuilder";
import {CheckPaymentSystem} from "./CheckPaymentSystem";
class App {
 init () {
     new InputController(ButtonController, DOMBuilder, CheckPaymentSystem)

 }
}

let app = new App()
app.init()
