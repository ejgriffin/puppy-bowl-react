import { useState } from "react";
const cohortName = "2308-FTB-ET-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export default function NewPuppyForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    try {
      const response = await fetch(`${APIURL}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Rufus",
          breed: "Irish Setter",
        }),
      });

      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="form">
      <h2>Add New Player!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Breed:{" "}
          <input value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}
