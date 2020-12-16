import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css"

function TinderCards() {
  const [lastDirection, setLastDirection] = useState('');
  const [people, usePeople] = useState([
    {
      name: "kieran",
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/godzilla-2-poster-1545057744.jpg?crop=1.00xw:0.677xh;0,0.0119xh&resize=980:*"
    },
    {
      name: "navi",
      url: "https://upload.wikimedia.org/wikipedia/en/1/15/Rodan_kaiju.jpg"
    }
  ]);

  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction);
  }

  const outOfFrame = (name) => {
    console.log("Dropped")
  }


  console.log(people);


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
          <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
          <h3>{person.name}</h3>
          </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
