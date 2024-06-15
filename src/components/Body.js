import RestuarantCard from "./RestuarantCard";
import { data } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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
  console.log("body");
  useEffect(() => {
    console.log("effect gets called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    // console.log(
    //   result,
    //   result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
    setFilterRest(
      result.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };
  const handleFilter = (e) => {
    console.log(e.target, listOfRestaurant);

    const restaurantList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4.2
    );
    setFilterRest([...restaurantList]);
  };

  const handleSearch = (e) => {
    const searchString = e.target.value;
    if (searchString) {
      const searchRests = listOfRestaurant.filter((item) =>
        item.card.card.info.name.toLowerCase().includes(e.target.value)
      );
      setFilterRest([...searchRests]);
    } else {
      setFilterRest([...cards]);
    }
  };
  const [listOfRestaurant, setFilterRest] = useState([]);
  const [searchItem, setSearchItem] = useState(null);
  let cardsList = listOfRestaurant.map((eachCard) => (
    <RestaurantCard restData={eachCard.info} key={eachCard.info.id} />
  ));
  //conditional rendering
  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="search">
        <input
          name="search"
          type="text"
          onChange={(event) => handleSearch(event)}
        />
      </div>
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
