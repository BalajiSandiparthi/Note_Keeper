import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClicked={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            onDelete={deleteNote}
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
