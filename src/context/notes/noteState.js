import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const s1 = {
       "name" : "Nishi",
       "class": "12"
    }
    const [state, setState] = useState(s1);
    const update = () =>{
        setTimeout(()=>{
            setState({
            "name": "Terence",
            "class": "11"
            })
        }, 2000)
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;