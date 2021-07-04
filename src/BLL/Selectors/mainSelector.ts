import {AppStateType} from "../store"

export const peopleSelector=(state:AppStateType)=>{
    return state.main.people
}
export const countSelector=(state:AppStateType)=>{
    return state.main.count
}
export const pageSelector=(state:AppStateType)=>{
    return state.main.page
}
export const initSelector=(state:AppStateType)=>{
    return state.main.isInit
}
export const errorSelector=(state:AppStateType)=>{
    return state.main.errorLog
}