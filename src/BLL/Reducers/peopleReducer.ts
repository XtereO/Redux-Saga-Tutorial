import { PeopleType } from "../../Types/Types";

export const SET_PEOPLE:"mainReducer/SET_PEOPLE"="mainReducer/SET_PEOPLE"
export const SET_PAGE:"mainReducer/SET_PAGE"="mainReducer/SET_PAGE"
export const SET_COUNT:"mainReducer/SET_COUNT"="mainReducer/SET_COUNT"
export const SET_SAGA_STATE:"mainReducer/SET_SAGA_STATE"="mainReducer/SET_SAGA_STATE"
export const SET_ERROR:"mainReducer/SET_ERROR"="mainReducer/SET_ERROR"
export const SET_INIT:"mainReducer/SET_INIT"="mainReducer/SET_INIT"


const initialState={
    people:[] as PeopleType[],
    page:1 as number,
    count:0 as number,
    errorLog:null as null | string,
    isInit:false as boolean
}
type InitialStateType=typeof initialState
type ActionType=(SetPageType | SetPeopleType 
    | SetCountType | SetErrorType | SetInitType)

export const mainReducer=(state=initialState,action:ActionType):InitialStateType=>{

    switch(action.type){

        case SET_INIT:
            return{
                ...state,
                isInit:action.isInit
            }
        case SET_PAGE:
            return{
                ...state,
                page:action.page
            }
        case SET_COUNT:
            return{
                ...state,
                count:action.count
            }
        case SET_PEOPLE:
            return{
                ...state,
                people:[...action.people]
            }
        case SET_ERROR:
            return {
                ...state,
                errorLog:action.errorLog
            }
        default:return state
    }
}


type SetInitType={
    type:typeof SET_INIT
    isInit:boolean
}
export const setInit=(isInit:boolean):SetInitType=>{
    return{
        type:SET_INIT,
        isInit
    }
}

type SetErrorType={
    type:typeof SET_ERROR
    errorLog:string | null
}
export const setError=(errorLog:string | null):SetErrorType=>{
    return{
        type:SET_ERROR,
        errorLog
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
    page:number
    type:typeof SET_PAGE
}
export const setPage=(page:number):SetPageType=>{
    return{
        type:SET_PAGE,
        page
    }
}

type SetPeopleType={
    people:PeopleType[]
    type:typeof SET_PEOPLE
}
export const setPeople=(people:PeopleType[]):SetPeopleType=>{
    return{
        type:SET_PEOPLE,
        people
    }
}

export type SetSagaStateType={
    page:number
    type:typeof SET_SAGA_STATE
}
export const setSagaSetState=(page:number):SetSagaStateType=>{
    return{
        page,
        type:SET_SAGA_STATE
    }
} 