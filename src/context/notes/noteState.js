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
      
    return (
        <NoteContext.Provider value={{notes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;