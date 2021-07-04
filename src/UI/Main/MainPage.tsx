import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPeople, setSagaSetState } from "../../BLL/Reducers/mainReducer"
import { errorSelector, initSelector, pageSelector, peopleSelector } from "../../BLL/Selectors/mainSelector";
import { Loader } from "../Bricks/Loader";


type PropsType={

}
export const MainPage:React.FC<PropsType>=(props)=>{
    
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(setSagaSetState(1))
    },[])

    //For Beauty
    let isInit=useSelector(initSelector)
    let errorLog=useSelector(errorSelector)

    //For list 
    let list=useSelector(peopleSelector)
    let listUI=list.map(l=><li className="list-group-item">{l.name}</li>)
    
    //For buttons
    let page=useSelector(pageSelector)

    let buttons=[]
    for(let i=0;i<8;i++){
        buttons.push(
        <button 
        className={page===(i+1) ? 
            "btn btn-light" : "btn btn-primary"}
        onClick={()=>{
            dispatch(setSagaSetState(i+1))
            }}>
            {i+1}
        </button>)
    }



    return<div className="container">
        <div>
            {buttons}
        </div>
        <div>
            {(!isInit) ? <ul className="list-group">
                {listUI}
            </ul> :
            <Loader />
            }
            {errorLog && 
            <div 
            style={{fontSize:"3em"}}
            className="text-danger">
                {errorLog}
            </div>}
        </div>
    </div>
}