import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import NoteState from "./context/notes/noteState";
import About from "./components/About";

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" />
          <Route exact path="/about"  element= {<About />} />
        </Routes>
      </BrowserRouter>
      </NoteState>
  
    </>
  );
}

export default App;