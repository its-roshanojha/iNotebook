import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";


const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote} = context;
  return (
    <>
    <AddNote/>
    <div className="row my-3 gy-2">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <Noteitem note ={note} key={note._id}/>
      })}
    </div>
    </>
  );
};

export default Notes;