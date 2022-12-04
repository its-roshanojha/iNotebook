import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" />
          <Route exact path="/home"  element= {<Home />} />
        </Routes>
      </BrowserRouter>
  
    </>
  );
}

export default App;