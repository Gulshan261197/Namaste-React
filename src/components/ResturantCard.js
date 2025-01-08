import { CDN_URL } from "../utils/constants"

const ResturantCard = ({resData}) => {
    console.log(resData)
    // const{name}=resData
    return(
        <div className="res-card">
       <img
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}${resData?.cloudinaryImageId}`}
      />
            <h3>{resData?.name}</h3>
            <h4>{resData?.avgRating} stars</h4>
            <h4>{resData?.cuisines.join(", ")}</h4>
            <h4>{resData?.costForTwo/100} For Two</h4>
            <h4>{resData?.deliveryTime} minutes</h4>
        </div>
    )
}

export default ResturantCard