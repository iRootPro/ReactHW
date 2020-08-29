import {combineReducers, createStore} from "redux";
import {loaderReducer} from "../redux/preloader-reducer";

const rootReducer = combineReducers({
    loading: loaderReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>