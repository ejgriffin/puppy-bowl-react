//Fetch All Player Data
//Render All Players in div with image, player name, details button, and delete player button
//details button should link to SinglePlayer component
//Add form for adding new puppy player with input for name and breed
//Add Search Bar with ability to Search for player. (Google it)

import PlayerCards from "./PlayerCards";

export default function AllPlayers({ displayList, fetchPuppies }) {
  return (
    <div className="cards">
      {displayList.map((puppy) => (
        <PlayerCards
          key={puppy.id}
          player={puppy}
          fetchPuppies={fetchPuppies}
        />
      ))}
    </div>
  );
}
