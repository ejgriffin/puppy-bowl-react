//create div to render single player data that shows image, name, breed, and status
//add button that returns to AllPlayers component
import AllPlayers from "./AllPlayers";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const cohortName = "2308-FTB-ET-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export default function PlayerCards({ player, fetchPuppies }) {
  async function handleClick(e) {
    const response = await fetch(`${APIURL}/players/${player?.id}`, {
      method: "DELETE",
    });
    const puppy = await response.json();

    console.log(puppy);
    await fetchPuppies();
    return puppy;
  }
  return (
    <div>
      <h2>{player?.name}</h2>
      <img src={player?.imageUrl} alt="" width="200"></img>
      <div>
        <Link to={`/player/${player?.id}`} className="details-button">
          **Get Puppy Player Stats**
        </Link>
      </div>

      <button onClick={handleClick} className="remove-button">
        Remove Puppy from Roster
      </button>
    </div>
  );
}
