import React, {useContext} from "react";
import { useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: "default"})
  const handleClick =(e)=>{
    e.preventDefault(); //page doesn't get reload
    addNote(note.title, note.description, note.tag);
  }

  const onChange =(e)=>{
    setNote({...note, [e.target.name]: e.target.value}) //whatever value inside the note object will exist as it is but jo properties aage likhi ja rhi hai inko add ya overwrite kar dena
}
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"> Title </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title" 
            onChange={onChange}
            placeholder="Enter the Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"> Tag </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag" 
            onChange={onChange}
            placeholder="Enter the tag"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark" onClick={handleClick}>Add Note</button>
      </div>
    </div>
  );
};

export default AddNote;