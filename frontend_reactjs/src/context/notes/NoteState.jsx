import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
        const obj = {
            name:"Akhilesh",
            location:"Mumbai"
        }
    return(
        <NoteContext.Provider value={obj}>
            {props.chidren}
        </NoteContext.Provider>
    )
}

export default NoteState;