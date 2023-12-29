import React from "react";
import { useState } from "react";

export default function SearchBar({ puppies, setDisplayList }) {
  const [searchinput, setSearchinput] = useState("");
  function handleChange(e) {
    const userInput = e.target.value;
    const searchResults = puppies.filter((puppy) => puppy.name === userInput);

    setDisplayList(searchResults);
    if (userInput === "") {
      setDisplayList(puppies);
    }
    console.log(searchResults);
  }
  return (
    <>
      {searchinput}
      <div className="search">
        <label>
          Search Puppy:
          <input
            type="text"
            style={{ width: "400px" }}
            onChange={handleChange}
          />
        </label>
      </div>
    </>
  );
}
