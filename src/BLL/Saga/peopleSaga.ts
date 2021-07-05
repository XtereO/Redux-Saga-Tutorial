import { setCount,setPeople,setPage, SET_SAGA_STATE, SetSagaStateType, setError, setInit} from "../Reducers/peopleReducer";
import {call, fork, put, takeEvery, takeLatest} from "redux-saga/effects"
import { getPeople, GetPeopleType } from "../../DAL/Api";


function* mainSagaWorker(action:SetSagaStateType){
    try{
        yield put(setInit(true))
        const data:GetPeopleType = yield call(getPeople,action.page)
        yield put(setInit(false))
        yield put(setPeople(data.results))
        yield put(setCount(data.count))
        yield put(setPage(action.page))
        yield put(setError(null))
    }catch(e){
        yield put(setInit(false))
        yield put(setError("Something went wrong..."))
    }
}


export function* mainSagaWatcher(){
    yield takeLatest(SET_SAGA_STATE,mainSagaWorker)
}