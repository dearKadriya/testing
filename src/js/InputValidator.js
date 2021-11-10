export class InputValidator {
    constructor() {
        this.input = document.body.querySelector('.card-input')
    }
    validate() {
        let input_value = this.input.value
        let regExp = /[a-zA-Z]/g;
        if (!input_value) {
            return 'Строка не должна быть пустой'
        }
        if (regExp.test(input_value)) {
            return 'Можно ввести только цифры'
        } else {
            return this.checkControlSum(input_value)

        }
    }
    checkControlSum(input_value) {
        let array_value = Array.from(String(input_value))
        let reversed_array = array_value.reverse();
        let checkNum = 0;
        for(let i= 0; i < reversed_array.length; i++) {
            let num = parseInt(reversed_array[i], 10);
            if (i % 2 !== 0) {
                num *= 2;
                if (num > 9) {
                    num -= 9;
                }
            }
            checkNum += num
        }
        if (checkNum % 10 === 0) {
            return 'Карта валидна'
        } else {
            return 'Карта не валидна'
        }
    }


}
