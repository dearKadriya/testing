export class DOMBuilder {
    constructor() {
        this.elem = document.body.querySelector('.validation-form');
    }
    showMessage(message) {
        this.find_error_message = document.querySelector('.error-message')
        if (this.find_error_message) {
            this.find_error_message.hidden = true;
        }
        let error_message = document.createElement('span');
        error_message.classList.add('error-message')
        error_message.innerText = message;
        this.elem.insertAdjacentElement('afterend', error_message)
    }
    DeleteMessage() {
        if (this.find_error_message) {
            this.find_error_message.remove();
        }
    }
    selectCard(cardName) {
        let allCards = document.querySelector('.cards-icons')
        if (cardName === 'nothing') {
            allCards.classList.add('card-disabled')
        } else {
            let card = document.querySelectorAll('.card')
            let array_card = Array.from(card);
            array_card.forEach(elem => {
                if (!elem.classList.contains(`${cardName}`)) {
                    elem.classList.add('card-disabled')
                }
            } )
        }
    }
    deselectCard() {
        let card_disabled = document.querySelectorAll('.card-disabled')
        let array_card = Array.from(card_disabled);
        array_card.forEach(elem => elem.classList.remove('card-disabled'))
    }
}
