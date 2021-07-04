
import { PeopleType } from "../Types/Types";
import { mainReducer, setError, setInit } from "./Reducers/mainReducer";

const initialState={
    people:[] as PeopleType[],
    page:1 as number,
    count:0 as number,
    errorLog:null as null | string,
    isInit:false as boolean
}

it("error work correct",()=>{
    //load data
    let state={...initialState}
    
    //dispatch
    state=mainReducer(state,setError("Something is goes bad"))

    //result
    expect(state.errorLog).toBe('Something is goes bad')
})
it("Init set correctly",()=>{
    //load data
    let state={...initialState}

    //dispatch
    state=mainReducer(state,setInit(true))

    //result 
    expect(state.isInit).toBe(true)
})