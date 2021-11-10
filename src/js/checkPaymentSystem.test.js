import {CheckPaymentSystem} from './CheckPaymentSystem'

test('Проверка номера, который не принадлежит платежным системам', () => {
    let validator = new CheckPaymentSystem()
    let result = validator.checkPaymentSystem([9])
    expect(result).toBe('nothing')
})

test('Проверка номера, который принадлежит платежным системам', () => {
    let validator = new CheckPaymentSystem()
    let result = validator.checkPaymentSystem([4])
    expect(result).toBe('visa')
})
