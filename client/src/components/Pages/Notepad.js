import React, { useState } from "react";
import Note from "../comps/note";
import WriteNote from "../comps/write-note";
import Container from 'react-bootstrap/Container';
// 1

function NotePad() {
  const [notes, setNotes] = useState([]);

  const [dataUpdated, setDataUpdated] = useState(true); // useeffect dependency
  const [backendData, setBackendData] = useState([{}]); // storing backend data

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  // submit form function 
  const submitForm = (e) => {
    e.preventDefault();
    async function postData () {
      console.log(firstName);
      const response = await fetch("http://localhost:5000/api/postData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // converting userinput into json 
        body: JSON.stringify({
          firstName: firstName
        })
      })
      if(response?.status === 200) {
        setDataUpdated(!dataUpdated);
        setFirstName("");
      }
    };
    postData(); // sending data 
   }

  return (
    <div>
      <WriteNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default NotePad;
