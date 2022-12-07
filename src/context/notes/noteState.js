import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "638c42792696eed618dbe244",
          "user": "638afb25e281eea224acc45b",
          "title": "My book",
          "description": "Wake up Nisha",
          "tag": "personal",
          "date": "2022-12-04T06:47:21.913Z",
          "__v": 0
        },
        {
          "_id": "638ca38557d30dc126f1caf7",
          "user": "638afb25e281eea224acc45b",
          "title": "wikipedia",
          "description": "about learning",
          "tag": "youtube",
          "date": "2022-12-04T13:41:25.567Z",
          "__v": 0
        }
      ]
    
    const [notes, setNotes] = useState(notesInitial);

    // Add a Note
    const addNote = (title, description, tag)=>{
      // todo API call
      console.log('Adding a new note')
      const note = {
        "_id": "638c42792696eed618dbe244",
          "user": "638afb25e281eea224acc45b",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-12-04T06:47:21.913Z",
          "__v": 0
      }
      setNotes(notes.concat(note)); //concat returns an array whereas push updates an array
    }
    // Delete a Note
    const deleteNote = (id)=>{
      //Todo: API call
      console.log("Deleting the note with id", id);
     const newNotes = notes.filter((note)=>{return note._id!==id});
      setNotes(newNotes)

    }
    // Edit a Note
    const editNote = ()=>{
      
    }
      
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;