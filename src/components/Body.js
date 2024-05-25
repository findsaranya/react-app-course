import RestuarantCard from "./RestuarantCard";
import { data } from "../utils/mockData";
import { useState } from "react";

const { data: cardData } = data;
const { cards } = cardData;
const restaurantList = [
  {
    info: {
      id: "52788",
      name: "Sree Ram Mess",
      cloudinaryImageId: "lk9qcvyopdpyiep3pov0",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      sla: {
        deliveryTime: 23,
      },
    },
  },
  {
    info: {
      id: "52789",
      name: "Sree Ram Mess One",
      cloudinaryImageId: "lk9qcvyopdpyiep3pov0",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 3.9,
      sla: {
        deliveryTime: 23,
      },
    },
  },
  {
    info: {
      id: "52790",
      name: "Sree Ram Mess One",
      cloudinaryImageId: "lk9qcvyopdpyiep3pov0",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4,
      sla: {
        deliveryTime: 23,
      },
    },
  },
];

export const Body = () => {
  const [listOfRestaurant, setFilterRest] = useState([...restaurantList]);
  let cardsList = listOfRestaurant.map((eachCard) => (
    <RestaurantCard restData={eachCard.info} key={eachCard.info.id} />
  ));
  return (
    <div className="body">
      <div className="search">SearchBar</div>
      <div className="filter">
        <button
          onClick={() => {
            const restaurantList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilterRest([...restaurantList]);
            // console.log(restaurantList);
          }}
        >
          click top rated🍓
        </button>
      </div>
      <div className="res-container">{cardsList}</div>
    </div>
  );
};

export default Body;
