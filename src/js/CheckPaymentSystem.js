export class CheckPaymentSystem {
    checkPaymentSystem(array_value) {
        let card_name = ''
        if (array_value[0] === 4) {
            card_name = 'visa'
        } else if (array_value[0] === 5) {
            card_name = 'mastercard'
        } else if (array_value[0] === 2) {
            card_name = 'world'
        } else {
            card_name = 'nothing'
        }
        return card_name
    }
}
