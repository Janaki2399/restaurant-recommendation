import React, { useState } from "react";
import "./styles.css";
import logo from "./images/fooodmain.jpg";

var italian = [
  {
    name: "Patisez",
    rating: 4.5,
    img: require("./images/pattisez.jpg")
  },
  {
    name: "Little Italy",
    rating: 3.4,
    img: require("./images/italy.jpg")
  },
  {
    name: "Toscano",
    rating: 4.2,
    img: require("./images/toscano.jpeg")
  },
  {
    name: "Hola",
    rating: 3.8,
    img: require("./images/hola.jpg")
  },
  {
    name: "Cafe de Paris",
    rating: 4.0,
    img: require("./images/cafedeparis.jpeg")
  }
];

const chineese = [
  {
    name: "Orange Wok",
    rating: 4.5,
    img: require("./images/oranagewok.jpg")
  },
  {
    name: "Wangs kitchen",
    rating: 2.3,
    img: require("./images/wangs.jpg")
  },
  {
    name: "Mainland China",
    rating: 3.3,
    img: require("./images/mainlandchina.jpeg")
  },
  {
    name: "Soi Soi",
    rating: 4.3,
    img: require("./images/soi soi.png")
  }
];
const southindian = [
  {
    name: "Murugan Idly",
    rating: 3.5,
    img: require("./images/murugan.jpg")
  },
  {
    name: "Saravana Bhavan",
    rating: 4.3,
    img: require("./images/saravana.jpeg")
  },
  {
    name: "Aanand Bhavan",
    rating: 3.5,
    img: require("./images/ananda-bhavan.jpg")
  },
  {
    name: "Akhshayam",
    rating: 4.3,
    img: require("./images/akshayam.jpg")
  },
  {
    name: "Sangeetha",
    rating: 3.2,
    img: require("./images/sangeetha.jpg")
  }
];
const dessert = [
  {
    name: "Roll over",
    rating: 4.2,
    img: require("./images/Rollover.jpeg")
  },
  {
    name: "Ibaco",
    rating: 2.5,
    img: require("./images/ibaco1.jpg")
  },
  {
    name: "Fromage",
    rating: 4.2,
    img: require("./images/fromage.jpeg")
  },
  {
    name: "Hagen das",
    rating: 4.3,
    img: require("./images/hagen.jpg")
  },
  {
    name: "Brownie Heaven",
    rating: 2.3,
    img: require("./images/brownieheaven.jpg")
  }
];

export default function App() {
  const [resname, changeResName] = useState("");

  function italianChoice(event) {
    const listItems = italian.map((restaurant, index) => (
      <li key={index}>
        <div className="main-container">
          <img
            alt="hello"
            src={restaurant.img}
            width="300"
            height="100%"
            max-width="80%"
          />
          <div className="detail-container">
            <div>
              <h1 style={{ fontFamily: "Parisienne" }}>{restaurant.name}</h1>
            </div>
            <div>
              <h2>Rating : {restaurant.rating}</h2>
            </div>
          </div>
        </div>
      </li>
    ));
    changeResName(listItems);
  }
  function chineeseChoice() {
    const listItems = chineese.map((restaurant, index) => (
      <li key={index}>
        <div className="main-container">
          <img
            alt="hello"
            src={restaurant.img}
            width="300"
            height="100%"
            max-width="80%"
          />
          <div className="detail-container">
            <div>
              <h1 style={{ fontFamily: "Parisienne" }}>{restaurant.name}</h1>
            </div>
            <div>
              <h2>Rating : {restaurant.rating}</h2>
            </div>
          </div>
        </div>
      </li>
    ));
    changeResName(listItems);
  }
  function SouthIndianChoice() {
    const listItems = southindian.map((restaurant, index) => (
      <li key={index}>
        <div className="main-container">
          <img
            alt="hello"
            src={restaurant.img}
            width="300"
            height="100%"
            max-width="80%"
          />
          <div className="detail-container">
            <div>
              <h1 style={{ fontFamily: "Parisienne" }}>{restaurant.name}</h1>
            </div>
            <div>
              <h2>Rating : {restaurant.rating}</h2>
            </div>
          </div>
        </div>
      </li>
    ));
    changeResName(listItems);
  }
  function DessertChoice() {
    const listItems = dessert.map((restaurant, index) => (
      <li key={index}>
        <div className="main-container">
          <img
            alt="hello"
            src={restaurant.img}
            width="300"
            height="100%"
            max-width="80%"
          />
          <div className="detail-container">
            <div>
              <h1 style={{ fontFamily: "Parisienne" }}>{restaurant.name}</h1>
            </div>
            <div>
              <h2>Rating : {restaurant.rating}</h2>
            </div>
          </div>
        </div>
      </li>
    ));
    changeResName(listItems);
  }

  return (
    <div className="App">
      <div className="bg">
        <img src={logo} width="100%" height="400rem" />
      </div>
      <h1
        style={{
          fontFamily: "Parisienne",
          backgroundColor: "black",
          color: "white",
          marginTop: "0px"
        }}
      >
        Restaurant Recommender
      </h1>
      <button className="btn" onClick={italianChoice}>
        Italian
      </button>
      <button className="btn" onClick={chineeseChoice}>
        Chineese
      </button>
      <button className="btn" onClick={SouthIndianChoice}>
        South Indian
      </button>
      <button className="btn" onClick={DessertChoice}>
        Desert
      </button>

      <ul>{resname}</ul>
    </div>
  );
}
