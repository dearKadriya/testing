import {InputValidator} from "./InputValidator";

test('Проверка валидного номера карты', () => {
    let validator = new InputValidator()
    let result = validator.checkControlSum(4561261212345467)
    expect(result).toBe('Карта валидна')
})

test('Проверка невалидного номера карты', () => {
    let validator = new InputValidator()
    let result = validator.checkControlSum(45612612123454678)
    expect(result).toBe('Карта не валидна')
})
