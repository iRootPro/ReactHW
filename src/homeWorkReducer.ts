
export type StateType = {
    id: string
    name: string
    age: number
}

type SortActionType = {
    type: 'SORT'
    payload: 'up' | 'down'
}

type CheckActionType = {
    type: 'CHECK'
    payload: number
}

type ActionsTypes = ReturnType<typeof sortUpActionCreator>  |
    ReturnType<typeof sortDownActionCreator> |
    ReturnType<typeof checkDownActionCreator>

export const sortUpActionCreator = () => ({type: 'SORT', payload: 'up'})
export const sortDownActionCreator = () => ({type: 'SORT', payload: 'down'})
export const checkDownActionCreator = () => ({type: 'CHECK', payload: '18'})


export const hwReducer = (
    state: Array<StateType>,
    action: ActionsTypes) => {
    switch (action.type) {
        case 'SORT':
            if (action.payload === 'up') {
                return [...state.sort((a, b) => (a.name > b.name) ? 1 : -1)]
            }

            if (action.payload === 'down') {
                return [...state.sort((a, b) => (a.name < b.name) ? 1 : -1)]
            }
            return [...state]
        case 'CHECK':
            return [...state.filter(man => man.age === 18)]
        default:
            return []
    }
};
