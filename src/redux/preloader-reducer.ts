export type loaderStateType = {
    loading: boolean
}

type changeStatusLoadingActionType = {
    type: 'changeStatusLoading'
    isLoading: boolean
}

const initialState: loaderStateType = {
    loading: false
}

type ActionType = ReturnType<typeof changeStatusLoadingAC>


export const loaderReducer = (state: loaderStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'changeStatusLoading':
            return {...state, loading: action.isLoading}
        default:
            return state
    }
}

export const changeStatusLoadingAC = (isLoading: boolean): changeStatusLoadingActionType => {
    return {type: 'changeStatusLoading', isLoading}
}