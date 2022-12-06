import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Test from "./components/Test"
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import About from "./components/About";

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
        <Routes>
          <Route exact path="/" element= {<Home />} />
          <Route exact path="/about"  element= {<About />} />
          <Route exact path="/test"  element= {<Test />} />
        </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
  
    </>
  );
}

export default App;