import { Link, useParams } from "react-router-dom";

export default function SinglePlayer() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <img src={player?.imageUrl} alt="" width="200"></img>
      <p>Name:{player?.name}</p>
      <p>Breed:{player?.breed}</p>
      <p>Status:{player?.status}</p>

      <Link to="/" className="close-button">
        Close
      </Link>
    </div>
  );
}
