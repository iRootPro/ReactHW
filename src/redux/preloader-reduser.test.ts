import {changeStatusLoadingAC, loaderReducer, loaderStateType} from "./preloader-reducer";

let initState: loaderStateType

beforeEach(() => {
    initState = { loading: false}
})


test('Reducer should be defined', () => {
    expect(loaderReducer).toBeDefined()
})

test('Should be change loading to true',() => {
    let action = changeStatusLoadingAC(true)
    let endState = loaderReducer(initState, action)
    expect(endState.loading).toBe(true)
})

test('Should be change loading to false',() => {
    let action = changeStatusLoadingAC(false)
    let endState = loaderReducer(initState, action)
    expect(endState.loading).toBe(false)
})