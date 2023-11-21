//create div to render single player data that shows image, name, breed, and status
//add button that returns to AllPlayers component

import { Link } from "react-router-dom";

export default function PlayerCards({ player, showProfile }) {
  return (
    <div>
      <h2>{player?.name}</h2>
      <img src={player?.imageUrl} alt="" width="200"></img>

      <button class="details-button">Get Details</button>
      <button class="remove-button">Remove Pupster</button>
    </div>
  );
}
