import React, { useState, useEffect } from "react";
import Note from "../comps/note";
import WriteNote from "../comps/write-note";

function NotePad() {
  const [data, setData] = useState([]); // stores fetched data
  const [notes, setNotes] = useState([]); // stores local notes
  const [dataUpdated, setDataUpdated] = useState(true); // useEffect dependency

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/api");
      const data = await response.json();
      setData(data); // update state with fetched data
    }
    fetchData();
  }, [dataUpdated]);

  function addNote(newNote) {
    fetch("http://localhost:5000/api/postData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    }).then(() => {
      setDataUpdated(!dataUpdated); // trigger data fetch on update
      setNotes([...notes, newNote]); // update local notes
    });
  }

  function deleteNote(id) {
    fetch(`http://localhost:5000/api/deleteNote/${id}`, {
      method: "DELETE",
    }).then(() => {
      setDataUpdated(!dataUpdated); // trigger data fetch on update
      setNotes(notes.filter((note) => note._id !== id)); // remove deleted note locally
    });
  }

  return (
    <div>
      <WriteNote onAdd={addNote} />
      {data.map((note) => {
        return (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default NotePad;