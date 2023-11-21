import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/player/:id" element={<SinglePlayer />} />
        <Route path="*" element={<AllPlayers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
