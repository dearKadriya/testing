import {CheckPaymentSystem} from './CheckPaymentSystem'

test('Проверка номера, который не принадлежит платежным системам', () => {
    let validator = new CheckPaymentSystem()
    let result = validator.checkPaymentSystem([9])
    expect(result).toBe('nothing')
})

test('Проверка номера, который принадлежит платежным системам mastercard', () => {
    let validator = new CheckPaymentSystem()
    let result = validator.checkPaymentSystem([5])
    expect(result).toBe('mastercard')
})

test('Проверка номера, который принадлежит платежным системам world', () => {
    let validator = new CheckPaymentSystem()
    let result = validator.checkPaymentSystem([2])
    expect(result).toBe('world')
})
test('Проверка номера, который принадлежит платежным системам visa', () => {
    let validator = new CheckPaymentSystem()
    let result = validator.checkPaymentSystem([4])
    expect(result).toBe('visa')
})
test('Проверка номера, который принадлежит платежным системам american-express', () => {
    let validator = new CheckPaymentSystem()
    let result = validator.checkPaymentSystem([3])
    expect(result).toBe('american-express')
})
test('Проверка номера, который принадлежит платежным системам discover', () => {
    let validator = new CheckPaymentSystem()
    let result = validator.checkPaymentSystem([6])
    expect(result).toBe('discover')
})
