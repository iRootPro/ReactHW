import {combineReducers, createStore} from "redux";
import {loaderReducer} from "../redux/preloader-reducer";
import {themeReducer} from "../redux/theme-reducer";

const rootReducer = combineReducers({
    loading: loaderReducer,
    theme: themeReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>