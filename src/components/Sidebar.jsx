import React from "react";

export const Sidebar = ({
  onAddNote,
  notes,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

  return (
    <>
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1>メモ日記</h1>
          <button onClick={onAddNote}>追加</button>
        </div>
        <div className="app-sidebar-notes">
          {sortedNotes.map((note) => (
            <div
              className={`app-sidebar-note ${
                note.id === activeNote && "active"
              }`}
              active="true"
              key={note.id}
              onClick={() => setActiveNote(note.id)}
            >
              <div className="sidebar-note-title">
                <strong> {note.title} </strong>
                <button onClick={() => onDeleteNote(note.id)}>削除</button>
              </div>
              <small>{new Date(note.modDate).toLocaleString("ja-JP")}</small>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        button {
          background: none;
          border: none;
          color: rgb(2, 146, 127);
          margin: 0;
          padding: 0;
          font-size: 16px;
          cursor: pointer;
        }
        h1 {
          padding-left: 5px;
        }
        .app-sidebar {
          width: 30%;
          height: 100vh;
          border-right: 3px dotted;
        }
        @media screen and (max-width: 960px) {
          .app-sidebar {
            width: 100%;
            height: 20vh;
            display: flex;
            border-bottom: dotted 3px;
          }
        }
        .app-sidebar-header {
          display: flex;
          justify-content: space-between;
          padding: 25px;
        }
        @media screen and (max-width: 960px) {
          .app-sidebar-header {
            width: 30%;
            display: block;
            border-right:dotted 3px;
          }
          .app-sidebar-header h1 {
            text-align: center;
          }
          .app-sidebar-header button {
            width: 100%;
            font-size: 25px;
            padding: 10px;
          }
        }
        @media screen and (max-width : 520px) {
          .app-sidebar-header h1 {
            font-size: 20px;
          }
        }
        .app-sidebar-header h1 {
          margin: 0;
        }
        .app-sidebar-notes {
          height: calc(100vh - 78px);
          overflow-y: scroll;
        }
        @media screen and (max-width: 960px) {
          .app-sidebar-notes {
            height: 20vh;
            width: 70%;
          }
        }
        .app-sidebar-note {
          padding: 25px;
          cursor: pointer;
          transition: all 0.5s;
          overflow-x: scroll;
          display: flex;
          align-items: center;
        }
        @media screen and (max-width: 960px) {
          .app-sidebar-note {
            justify-content: space-around;
            }
          }
          .sidebar-note-title button {
            margin: 0 10px;
          }
        }

        .sidebar-note-title {
          display: flex;
          justify-content: space-between;
        }
        .app-sidebar-note p {
          margin: 10px 0;
        }
        .app-sidebar-note small {
          color: rgb(43, 30, 120);
        }
        .app-sidebar-note:hover {
          background-color: #f1f0f0;
        }
        .app-sidebar-note.active {
          background-color: rgb(219, 221, 101);
        }
      `}</style>
    </>
  );
};
