import React from "react";

export default function Notepad(props) {
  function handleChange(event) {
    props.updateNote(props.currentNoteId, event.target.value);
  }
  return (
    <div className="notepad">
      <h1>Notepad</h1>
      <textarea
        placeholder={props.data[props.currentNoteId].name}
        className="text-area"
        cols="40"
        rows="20"
        value={props.data[props.currentNoteId].info}
        onChange={handleChange}
      />
    </div>
  );
}
