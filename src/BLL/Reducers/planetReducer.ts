import { PlanetType } from "../../Types/Types";

const SET_INIT:"planetReducer/SET_INIT"="planetReducer/SET_INIT"
const SET_ERROR:"planetReducer/SET_ERROR"="planetReducer/SET_ERROR"
const SET_COUNT:"planetReducer/SET_COUNT"="planetReducer/SET_COUNT"
const SET_PLANETS:"planetReducer/SET_PLANETS"="planetReducer/SET_PLANETS"
const SET_PAGE:"planetReducer/SET_PAGE"="planetReducer/SET_PAGE"
export const SET_STATE_PLANET:"planetReducer/SET_STATE_PLANET"="planetReducer/SET_STATE_PLANET"


const initialState={
    planets:[] as PlanetType[],
    page:1 as number,
    count:0 as number,
    errorLog:null as null | string,
    isInit:false as boolean
}
type InitialStateType=typeof initialState
type ActionType=(SetInitType | SetPlanetsType | SetPageType |
    SetCountType | SetErrorType)

export const planetReducer=(state=initialState,action:ActionType):InitialStateType=>{
    switch(action.type){
        case SET_INIT:
            return {
                ...state,isInit:action.init
            }
        case SET_COUNT:
            return {
                ...state,count:action.count
            }
        case SET_ERROR:
            return {
                ...state,errorLog:action.errorLog
            }
        case SET_PAGE:
            return {
                ...state,page:action.page
            }
        case SET_PLANETS:
            return {
                ...state,planets:action.planets
            }
        default:return state
    }
}

type SetInitType={
    type:typeof SET_INIT
    init:boolean    
}
export const setInit=(init:boolean):SetInitType=>{
    return{
        type:SET_INIT,
        init
    }
}

type SetCountType={
    type:typeof SET_COUNT
    count:number
}
export const setCount=(count:number):SetCountType=>{
    return{
        type:SET_COUNT,
        count
    }
}

type SetPageType={
    type:typeof SET_PAGE
    page:number
}
export const setPage=(page:number):SetPageType=>{
    return{
        type:SET_PAGE,
        page
    }
}

type SetErrorType={
    type:typeof SET_ERROR
    errorLog:string | null
}
export const setErrorLog=(errorLog:string | null):SetErrorType=>{
    return{
        type:SET_ERROR,
        errorLog
    }
}

type SetPlanetsType={
    planets:PlanetType[]
    type:typeof SET_PLANETS
}
export const setPlanets=(planets:PlanetType[]):SetPlanetsType=>{
    return{
        type:SET_PLANETS,
        planets
    }
}

export type SetStateType={
    type:typeof SET_STATE_PLANET
    page:number
}
export const setState=(page:number):SetStateType=>{
    return{
        type:SET_STATE_PLANET,
        page
    }
}