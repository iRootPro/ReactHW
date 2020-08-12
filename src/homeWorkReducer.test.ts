import {hwReducer} from "./homeWorkReducer";

let peoples: Array<{ id: string, name: string, age: number }>

beforeAll(() => {
    peoples = [
        {id: '1', name: 'Alex', age: 18},
        {id: '2', name: 'Sasha', age: 9},
        {id: '3', name: 'Anastasiya', age: 35},
        {id: '4', name: 'Ivan', age: 15},
        {id: '5', name: 'Lena', age: 18},
    ]
})

test('Should be defined reducer hwReducer', () => {
    expect(hwReducer).toBeDefined()
})

test('Should be returned sorted array of name', () => {


    const result: Array<{ id: string, name: string, age: number }> = [
        {id: '1', name: 'Alex', age: 18},
        {id: '3', name: 'Anastasiya', age: 35},
        {id: '4', name: 'Ivan', age: 15},
        {id: '5', name: 'Lena', age: 18},
        {id: '2', name: 'Sasha', age: 9},
    ]

    const resultFromReducer = hwReducer(peoples, {type: 'SORT', payload: 'up'})
    expect(resultFromReducer).toEqual(result)
})

test('Should be return array of objects descending by name', () => {

    const result: Array<{ id: string, name: string, age: number }> = [
        {id: '2', name: 'Sasha', age: 9},
        {id: '5', name: 'Lena', age: 18},
        {id: '4', name: 'Ivan', age: 15},
        {id: '3', name: 'Anastasiya', age: 35},
        {id: '1', name: 'Alex', age: 18},
    ]
    const resultFromReducer = hwReducer(peoples, {type: 'SORT', payload: 'down'})
    expect(resultFromReducer).toEqual(result)
})

test('Should be return array of peoples with age = 18', () => {
    const result = [
        {id: '5', name: 'Lena', age: 18},
        {id: '1', name: 'Alex', age: 18},
    ]
    const resultFromReducer = hwReducer(peoples, {type: 'CHECK', payload: 18})
    expect(resultFromReducer).toEqual(result)
})
