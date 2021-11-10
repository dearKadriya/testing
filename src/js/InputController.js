import {ButtonController} from "./ButtonController";
import {DOMBuilder} from "./DOMBuilder";
import {CheckPaymentSystem} from "./CheckPaymentSystem";

export class InputController {
    constructor() {
        this.input = document.body.querySelector('.card-input')
        this.button = new ButtonController()
        this.builder = new DOMBuilder()
        this.paymentCheker = new CheckPaymentSystem()
        this.addHandler()
    }
    addHandler() {
        this.input.addEventListener('keyup', ()=>{
            if (this.input.value === "") {
                this.button.disableButton(true)
            } else {
                this.button.disableButton(false)
            }
            let array_value = Array.from(String(this.input.value), Number)
            if (array_value.length === 0) {
                this.builder.deselectCard()
            } else {
                this.builder.selectCard(this.paymentCheker.checkPaymentSystem(array_value))
            }
        })

    }

}
