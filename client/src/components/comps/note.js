import React from "react";

function Note(props) {


  //Handles deleting the note from the server
  async function deleteNoteOnServer(id) {
      const response = await fetch(`http://localhost:5000/api/deleteNote/${id}`, {
          method: 'DELETE',
      });
      // Handle response if needed
  }

  function handleClick() {
    props.onDelete(props.id);
    deleteNoteOnServer(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
