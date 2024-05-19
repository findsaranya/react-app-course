import RestuarantCard from "./RestuarantCard";
import { data } from "../utils/mockData";

const { data: cardData } = data;
const { cards } = cardData;

export default Body = () => {
  let cardsList = cards.map((eachCard) => (
    <RestaurantCard
      restData={eachCard.card.card.info}
      key={eachCard.card.card.info.id}
    />
  ));
  return (
    <div className="body">
      <div className="search">SearchBar</div>
      <div className="res-container">{cardsList}</div>
    </div>
  );
};
