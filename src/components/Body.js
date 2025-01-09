import ResturantCard from "./ResturantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
const Body = ()=>{
    const [restaurantList, setrestaurantList] = useState([])

    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData =async () => {
        const data =await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage0-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json =await data.json()
        console.log("Swiggy Apis..", json?.data.cards[1].card)
        setrestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restaurantList.length === 0? <Shimmer/> : (
        <div className="Body">
       
            <div className="filter">
            <div className="search">
                <input 
                type="text" 
                className="search-bar" 
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}
                />
                <button onClick={()=>{
                    //filter the restaurant cards and update the UI
                }} >Search</button>
            </div>
                <button className="filter-btn" onClick={()=>{
                const a = resList.filter(res=>res.data.avgRating>4)
                setrestaurantList(a)
                 }}>Top Rated Resturants</button>
            </div>
            <div className="res-container">
            {
                restaurantList.map((resturant)=>{
                return <ResturantCard key={resturant?.info?.cloudinaryImageId} resData={resturant?.info}/>

               }) 
            }
                
            </div>
        </div>
    )
}

export default Body