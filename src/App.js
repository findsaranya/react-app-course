import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const restData = {
  id: "582150",
  name: "Chinese Wok",
  cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  locality: "Avinashi Road",
  areaName: "Peelamedu",
  costForTwo: "₹250 for two",
  cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  avgRating: 4.1,
  parentId: "61955",
  avgRatingString: "4.1",
  totalRatingsString: "1K+",
  sla: {
    deliveryTime: 29,
    lastMileTravel: 3.9,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "3.9 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2024-04-29 02:00:00",
    opened: true,
  },
  badges: {},
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹169",
  },
  orderabilityCommunication: {
    title: {},
    subTitle: {},
    message: {},
    customIcon: {},
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
};

const AppLayout = () => (
  <div className="app-layout">
    <Header />
    <Body />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  <AppLayout />
  //</StrictMode>
);
