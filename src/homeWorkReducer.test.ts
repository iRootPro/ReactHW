import {
    checkDownActionCreator,
    hwReducer,
    sortDownActionCreator,
    sortUpActionCreator,
    StateType
} from "./homeWorkReducer";

let peoples: Array<StateType>

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


    const result: Array<StateType> = [
        {id: '1', name: 'Alex', age: 18},
        {id: '3', name: 'Anastasiya', age: 35},
        {id: '4', name: 'Ivan', age: 15},
        {id: '5', name: 'Lena', age: 18},
        {id: '2', name: 'Sasha', age: 9},
    ]

    const resultFromReducer = hwReducer(peoples, sortUpActionCreator())
    expect(resultFromReducer).toEqual(result)
})

test('Should be return array of objects descending by name', () => {

    const result: Array<StateType> = [
        {id: '2', name: 'Sasha', age: 9},
        {id: '5', name: 'Lena', age: 18},
        {id: '4', name: 'Ivan', age: 15},
        {id: '3', name: 'Anastasiya', age: 35},
        {id: '1', name: 'Alex', age: 18},
    ]
    const resultFromReducer = hwReducer(peoples, sortDownActionCreator())
    expect(resultFromReducer).toEqual(result)
})

test('Should be return array of peoples with age = 18', () => {
    const result: Array<StateType> = [
        {id: '5', name: 'Lena', age: 18},
        {id: '1', name: 'Alex', age: 18},
    ]
    const resultFromReducer = hwReducer(peoples, checkDownActionCreator())
    expect(resultFromReducer).toEqual(result)
})
