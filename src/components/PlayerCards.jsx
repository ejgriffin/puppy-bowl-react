//create div to render single player data that shows image, name, breed, and status
//add button that returns to AllPlayers component

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PlayerCards({ player }) {
  return (
    <div>
      <h2>{player?.name}</h2>
      <img src={player?.imageUrl} alt="" width="200"></img>
      <div>
        <Link to={`/player/${player?.id}`} className="details-button">
          **Get Puppy Player Stats**
        </Link>
      </div>

      <button className="remove-button">Remove Puppy from Roster</button>
    </div>
  );
}
