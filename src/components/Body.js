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

// () => {
//
//   // console.log(restaurantList);
// }
export const Body = () => {
  const handleFilter = (e) => {
    console.log(e.target);
    const restaurantList = listOfRestaurant.filter(
      (res) => res.card.card.info.avgRating > 4.5
    );
    setFilterRest([...restaurantList]);
  };

  const [listOfRestaurant, setFilterRest] = useState([...cards]);
  let cardsList = listOfRestaurant.map((eachCard) => (
    <RestaurantCard
      restData={eachCard.card.card.info}
      key={eachCard.card.card.info.id}
    />
  ));
  return (
    <div className="body">
      <div className="search">SearchBar</div>
      <div className="filter">
        <button onClick={(event) => handleFilter(event)}>
          click top rated🍓
        </button>
      </div>
      <div className="res-container">{cardsList}</div>
    </div>
  );
};

export default Body;
