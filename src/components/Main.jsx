import React from "react";

export const Main = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };
  if (!activeNote) {
    return (
      <>
        <div className="no-active-note">ノートが選択されていません</div>;
        <style jsx>
          {`
            .no-active-note {
              width: 70%;
              height: 100vh;
              line-height: 100vh;
              text-align: center;
              font-size: 2rem;
              color: #999;
            }
            @media screen and (max-width: 960px) {
              .no-active-note {
                width: 100%;
              }
            }
          `}
        </style>
      </>
    );
  }
  return (
    <>
      <div className="app-main">
        <div className="app-main-note-edit">
          <input
            id="title"
            type="text"
            placeholder="新規タイトルを追加"
            value={activeNote.title}
            onChange={(e) => onEditNote("title", e.target.value)}
          />
          <textarea
            id="content"
            placeholder="ノート内容を記入"
            value={activeNote.content}
            onChange={(e) => onEditNote("content", e.target.value)}
          ></textarea>
        </div>
      </div>
      <style jsx>{`
        .app-main {
          width: 70%;
          height: 100vh;
          margin-top: 20px;
        }
        @media screen and (max-width: 960px) {
          .app-main {
            width: 100%;
          }
        }
        .app-main-note-edit,
        .app-main-note-preview {
          height: 50vh;
        }
        .app-main-note-edit {
          padding: 25px;
        }
        .app-main-note-edit input,
        textarea {
          display: block;
          border: 1px solid #ddd;
          margin-bottom: 20px;
          width: 100%;
          height: 50vh;
          padding: 5px;
          resize: none;
          font-size: 16px;
        }
        .app-main-note-edit input {
          height: 100px;
          font-size: 2rem;
        }
        .app-main-note-preview {
          border-top: 1px solid #ddd;
          overflow-y: scroll;
          background: rgba(0, 0, 0, 0.3);
        }
        .preview-title {
          padding: 25px 25px 0 25px;
          margin: 0;
        }
        .markdown-preview {
          padding: 0 25px 25px 25px;
          line-height: 2rem;
        }
      `}</style>
    </>
  );
};
