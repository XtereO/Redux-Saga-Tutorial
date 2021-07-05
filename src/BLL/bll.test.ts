
import { PeopleType } from "../Types/Types";
import { mainReducer, setError, setInit } from "./Reducers/peopleReducer";

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
    state=mainReducer(state,setError("Something went wrong"))

    //result
    expect(state.errorLog).toBe('Something went wrong')
})
it("Init set correctly",()=>{
    //load data
    let state={...initialState}

    //dispatch
    state=mainReducer(state,setInit(true))

    //result 
    expect(state.isInit).toBe(true)
})