import {InputValidator} from "./InputValidator";
import {DOMBuilder} from "./DOMBuilder";

export class ButtonController {
    constructor() {
        this.button = document.querySelector('.btn-success');
        // this.button.disabled = true;
        this.validator = new InputValidator();
        this.builder = new DOMBuilder();

        this.addHandler();
    }
    addHandler() {
        this.button.addEventListener('click',  (event) => {
            event.preventDefault();
            let message = this.validator.validate();
            this.builder.DeleteMessage()
            this.builder.showMessage(message)
        })
    }
    disableButton(lean) {
        this.button.disabled = lean;
    }


}
