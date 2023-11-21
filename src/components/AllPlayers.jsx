//Fetch All Player Data
//Render All Players in div with image, player name, details button, and delete player button
//details button should link to SinglePlayer component
//Add form for adding new puppy player with input for name and breed
//Add Search Bar with ability to Search for player. (Google it)
import { useEffect, useState } from "react";
const cohortName = "2308-FTB-ET-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
import PlayerCards from "./PlayerCards";

export default function AllPlayers() {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    async function fetchPuppies() {
      try {
        const response = await fetch(`${APIURL}/players`);
        const result = await response.json();
        console.log(result);
        setPuppies(result.data.players);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPuppies();
  }, []);

  return (
    <div className="cards">
      {puppies.map((puppy) => (
        <PlayerCards key={puppy.id} player={puppy} />
      ))}
    </div>
  );
}
