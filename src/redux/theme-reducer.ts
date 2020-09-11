const CHANGE_THEME = 'CHANGE_THEME'

export type themeStateType = {
    theme: typeThemes
}

export const initialState: themeStateType = {
    theme: "light"
}

export type typeThemes = "light" | "dark" | string

type themeActionType = ReturnType<typeof changeTheme>

export const themeReducer = (state: themeStateType = initialState, action: themeActionType) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, theme: action.theme}
        default:
            return state
    }

}

export const changeTheme = (theme: typeThemes) => {return {type: CHANGE_THEME, theme}}