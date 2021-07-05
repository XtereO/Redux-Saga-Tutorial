import { call, put, takeEvery } from "redux-saga/effects";
import { getPlanet, GetPlanetType } from "../../DAL/Api";
import { setCount, setErrorLog, setInit, setPage, setPlanets, SetStateType, SET_STATE_PLANET } from "../Reducers/planetReducer";



function* planetWorker(action:SetStateType) {
    try{
        yield put(setInit(true))
        const data:GetPlanetType = yield call(getPlanet,action.page)
        yield put(setInit(false))
        yield put(setPlanets(data.results))
        yield put(setCount(data.count))
        yield put(setPage(action.page))
        yield put(setErrorLog(null))
    }catch(e){
        yield put(setInit(false))
        yield put(setErrorLog("Something went wrong..."))
    }
}


export function* planetWatcher() {
    yield takeEvery(SET_STATE_PLANET,planetWorker)   
}