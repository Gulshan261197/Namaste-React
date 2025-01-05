import ResturantCard from "./ResturantCard"
import { useState } from "react"
import resList from "../utils/mockData"
const Body = ()=>{
    const [restaurantList,setrestaurantList] = useState(resList)
    return (
        <div className="Body">
       
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                const a = resList.filter(res=>res.data.avgRating>4)
                setrestaurantList(a)
                 }}>Top Rated Resturants</button>
            </div>
            <div className="res-container">
            {
                restaurantList.map((resturant)=>{
                return<ResturantCard key={resturant.data.id}  resData = {resturant}/>
               }) 
            }
                
            </div>
        </div>
    )
}

export default Body