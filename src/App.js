import React from "react";
import Note from "./Note";
import Notepad from "./Notepad";
function App() {
  const [notes, setNotes] = React.useState([
    { id: 0, name: `Note - 0`, info: "" },
  ]);
  const [currentNoteId, setCurrentNote] = React.useState(0);

  

  function createNote() {
    const newNote = {
      id: notes.length,
      name: `Note - ${notes.length}`,
      info: "",
    };
    setNotes([...notes, newNote]);
  }

  function getId(id) {
    setCurrentNote((prevId) => id);
  }

  function updateNote(iid, updateInfo) {
    const newNotes = [...notes];
    newNotes[iid].info = updateInfo;
    setNotes(newNotes);
  }
  return (
    <div className="main-body">
      <Note data={notes} createNote={createNote} getId={getId} />
      <Notepad
        data={notes}
        updateNote={updateNote}
        currentNoteId={currentNoteId}
      />
    </div>
  );
}

export default App;
