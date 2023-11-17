import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SInglePlayer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <h1>PUPPY BOWL 2!!</h1>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/player" element={<SinglePlayer />} />
        <Route path="*" element={<AllPlayers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
