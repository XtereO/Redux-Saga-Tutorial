

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setState } from "../../BLL/Reducers/planetReducer"
import { countSelector, errorSelector, initSelector, pageSelector, planetSelector } from "../../BLL/Selectors/planetSelector";
import { Loader } from "../Bricks/Loader";


type PropsType={

}
export const PlanetPage:React.FC<PropsType>=(props)=>{
    
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(setState(1))
    },[])

    //For Beauty
    let isInit=useSelector(initSelector)
    let errorLog=useSelector(errorSelector)

    //For list 
    let list=useSelector(planetSelector)
    let listUI=list.map(l=><li className="list-group-item">{l.name}</li>)
    
    //For buttons
    let page=useSelector(pageSelector)
    let count=useSelector(countSelector)
    let [portionNumber,setPortionNumber]=useState(1)

    let buttons=[]
    for(let i=0;i<Math.ceil(count/10);i++){
        buttons.push(
        <button 
        className={page===(i+1) ? 
            "btn btn-light" : "btn btn-primary"}
        onClick={()=>{
            dispatch(setState(i+1))
            }}>
            {i+1}
        </button>)
    }


    //JSX start
    return<div className="container mt-4">
        
        <h3>
            Planets
        </h3>
        <div>
            
            {portionNumber!=1 && <button 
            onClick={()=>setPortionNumber((prev)=>--prev)}
            className="btn btn-light">
                {"<"}
            </button>}
                
                {[...buttons].slice((portionNumber-1)*5,(portionNumber)*5)}
            
            {portionNumber<Math.ceil(count/50) && <button
            onClick={()=>setPortionNumber((prev)=>++prev)}
            className="btn btn-light">
                {">"}
            </button>}

        </div>
        <div style={(isInit) ? 
            {display:"flex",justifyContent:"center"}
            : {}} className="mt-4">
            
            {(!isInit) ? 
            <ul className="list-group">{listUI}</ul> 
            :<Loader />}



            {errorLog && 
            <div 
            style={{fontSize:"3em"}}
            className="text-danger">
                {errorLog}
            </div>}

        </div>
    </div>
}