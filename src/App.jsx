import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    //localstrageにノートを保存する。
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([newNote, ...notes]);
    console.log(notes);
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    //修正された新しいノートの配列を返す。
    const updateNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updateNotesArray);
  };

  return (
    <div className="App">
      <h1 className="title">memodiary</h1>
      <div className="flex">
        <Sidebar
          onAddNote={onAddNote}
          notes={notes}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      </div>
      <style jsx>{`
        .title {
          text-align: center;
          margin: 0 auto;
          padding: 20px;
          font-size: 50px;
          color: rgb(27, 7, 53);
          border-bottom: dotted 3px;
          background-color: rgb(219, 221, 101);
        }
        .flex {
          display: flex;
        }
        @media screen and (max-width: 960px) {
          .flex {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
