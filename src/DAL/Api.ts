import axios from "axios";
import { PeopleType } from "../Types/Types";


const instance=axios.create({
    baseURL:"https://swapi.dev/api/"
})

export type GetPeopleType={
    count:number
    next:string
    previous:string
    results:PeopleType[]
}
export const getPeople=(page:number)=>{
    return instance.get<GetPeopleType>(`people?page=${page}`)
    .then(r=>r.data)
}