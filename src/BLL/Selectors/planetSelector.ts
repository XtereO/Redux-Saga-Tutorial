import {AppStateType} from "../store"

export const planetSelector=(state:AppStateType)=>{
    return state.planet.planets
}
export const countSelector=(state:AppStateType)=>{
    return state.planet.count
}
export const pageSelector=(state:AppStateType)=>{
    return state.planet.page
}
export const initSelector=(state:AppStateType)=>{
    return state.planet.isInit
}
export const errorSelector=(state:AppStateType)=>{
    return state.planet.errorLog
}