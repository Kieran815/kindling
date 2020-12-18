import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
// import axios file, not axios dependancy
import axios from './axios';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/kindling/cards');
      setPeople(req.data);
    }
    fetchData();
  }, []); // make sure to pass empty array to push `fetchData` results to
  console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log("Dropped")
  }


  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map(person => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div className="card" style={{ backgroundImage: `url(${person.imgUrl})` }}>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
