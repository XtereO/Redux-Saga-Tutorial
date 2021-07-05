import { PeoplePage } from "../People/People"
import { PlanetPage } from "../Planet/Planet"


type PropsType={}
export const MainPage:React.FC<PropsType>=(props)=>{
    return<div>
        <PeoplePage />
        <PlanetPage />
    </div>
}