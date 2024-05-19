import { CON_URL } from "../utils/constants";

export default RestaurantCard = ({ restData }) => {
  const resStyle = {
    backgroundColor: "pink",
  };

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    restData;
  const { deliveryTime } = sla;
  return (
    <div className="res-card" style={resStyle}>
      <img src={`${CON_URL}${cloudinaryImageId}`} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime + " mins"}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
