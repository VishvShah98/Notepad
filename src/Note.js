import React from "react";

export default function Note(props) {
  const notes = props.data.map((note) => {
    return (
      <div
        className="single-note"
        key={note.id}
        onClick={() => props.getId(note.id)}
      >
        {note.name}
      </div>
    );
  });

  return (
    <div className="note">
      <h1>Notes</h1>

      <label htmlFor="add">Add new note </label>

      <button name="add" onClick={props.createNote}>
        +
      </button>

      <div>{notes}</div>
    </div>
  );
}
