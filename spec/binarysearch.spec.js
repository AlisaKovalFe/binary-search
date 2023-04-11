const binarySearch = require('../index')

test('Функция должна возвращать индекс элемента', () => {
    const arr = ['A', 'B', 'D', 'C', 'E', 'F', 'G', 'H']
    const arr1 = [1, 2, 5, 4, 3]
    const arr2 = ['A', 'B']
    const arr3 = ['A']

    expect(binarySearch(arr, 'G')).toEqual(6)
    expect(binarySearch(arr, 'B')).toEqual(1)
    expect(binarySearch(arr1, 3)).toEqual(2)
    expect(binarySearch(arr2, 'B')).toEqual(1)
    expect(binarySearch(arr3, 'A')).toEqual(0)
})

test('Функция должна быть определена', () => {
    const arr = ['A', 'B', 'D', 'C', 'E', 'F', 'G', 'H']
    expect(binarySearch(arr, 'G')).toBeDefined()
})

test('Функция должна возвращать -1, если элемента не существует в данном массиве', () => {
    const arr = ['A', 'B', 'D', 'C', 'E', 'F', 'G', 'H']
    const arr1 = []
    const arr2 = ['A']
    expect(binarySearch(arr, 'T')).toEqual(-1)
    expect(binarySearch(arr1, 'B')).toEqual(-1)
    expect(binarySearch(arr2, 'A')).toEqual(0)
})