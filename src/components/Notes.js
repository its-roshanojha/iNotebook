import React, {useEffect, useRef, useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote} = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: ""})

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  };
  const handleClick =(e)=>{
    //console.log('updating note...', note);
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click();
  }

  const onChange =(e)=>{
    setNote({...note, [e.target.name]: e.target.value}) //whatever value inside the note object will exist as it is but jo properties aage likhi ja rhi hai inko add ya overwrite kar dena
}
  
  return (
    <>
      <AddNote />
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary d-none"
        ref={ref} //use to give references
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo
      </button>
      {/* <!-- Modal --> */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">

            <div className="container my-3">
        <h2>Add a Note</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"> Title </label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            name="etitle"
            value={note.etitle} 
            onChange={onChange}
            placeholder="Enter the Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label"> Tag </label>
          <input
            type="text"
            className="form-control"
            id="etag"
            name="etag" 
            value={note.etag}
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
            id="edescription"
            name="edescription"
            value={note.edescription}
            onChange={onChange}
            rows="3"
          ></textarea>
        </div>
      </div>

            </div>
            <div className="modal-footer">
              <button ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={handleClick} type="button" className="btn btn-primary">
               Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 gy-2">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return (
            <Noteitem note={note} key={note._id} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;