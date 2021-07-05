import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { mainReducer } from "./Reducers/peopleReducer";
import { all, fork } from "redux-saga/effects";
import { mainSagaWatcher } from "./Saga/peopleSaga";
import { planetWatcher } from "./Saga/planetsSaga";
import { planetReducer } from "./Reducers/planetReducer";

const rootReducer=combineReducers({
    people:mainReducer,
    planet:planetReducer
})
type RootReducerType=typeof rootReducer
export type AppStateType=ReturnType<RootReducerType>

const sagaMiddleware=createSagaMiddleware()

export const store=createStore(rootReducer,
    applyMiddleware(sagaMiddleware))
function* rootSaga() {
    yield all([
        mainSagaWatcher(),
        planetWatcher()
    ])    
}
sagaMiddleware.run(rootSaga)