import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import "./App.css";
import NewPuppyForm from "./components/NewPuppyForm";
import { useState, useEffect } from "react";
const cohortName = "2308-FTB-ET-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

function App() {
  const [puppies, setPuppies] = useState([]);
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

  useEffect(() => {
    fetchPuppies();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NewPuppyForm fetchPuppies={fetchPuppies} />
              <AllPlayers puppies={puppies} fetchPuppies={fetchPuppies} />
            </div>
          }
        />
        <Route path="/player/:id" element={<SinglePlayer />} />
        <Route
          path="*"
          element={<AllPlayers puppies={puppies} fetchPuppies={fetchPuppies} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
