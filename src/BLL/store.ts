import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { mainReducer } from "./Reducers/mainReducer";
import { all, fork } from "redux-saga/effects";
import { mainSagaWatcher } from "./Saga/mainSaga";

const rootReducer=combineReducers({
    main:mainReducer
})
type RootReducerType=typeof rootReducer
export type AppStateType=ReturnType<RootReducerType>

const sagaMiddleware=createSagaMiddleware()

export const store=createStore(rootReducer,
    applyMiddleware(sagaMiddleware))
function* rootSaga() {
    yield all([
        mainSagaWatcher()
    ])    
}
sagaMiddleware.run(rootSaga)