import { Link, useParams } from "react-router-dom";
import AllPlayers from "./AllPlayers";
import { useState, useEffect } from "react";

const cohortName = "2308-FTB-ET-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export default function SinglePlayer() {
  const { id } = useParams();
  console.log(id);
  const [puppy, setPuppy] = useState(null);

  useEffect(() => {
    async function fetchPuppy() {
      try {
        const response = await fetch(`${APIURL}/players/${id}`);
        const result = await response.json();
        console.log(result);
        setPuppy(result.data.player);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPuppy();
  }, []);

  return (
    <div className="card">
      <img src={puppy?.imageUrl} alt="" width="400"></img>
      <p>
        <span>Name:</span> {puppy?.name}
      </p>
      <p>
        <span>Breed:</span> {puppy?.breed}
      </p>
      <p>
        <span>Status:</span> {puppy?.status}
      </p>

      <Link to="/" className="close-button">
        Close
      </Link>
    </div>
  );
}
