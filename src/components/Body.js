import ResturantCard from "./ResturantCard"
import resList from "../utils/mockData"
const Body = ()=>{
    return (
        <div className="Body">
            <div className="search">Search</div>
            <div className="res-container">
            {
               resList.map((resturant)=>{
                return<ResturantCard key={resturant.data.id}  resData = {resturant}/>
               }) 
            }
                
            </div>
        </div>
    )
}

export default Body