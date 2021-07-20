import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {

  const myStyle={
    maxWidth:"500px",
    display:"flex",
    justifySelf:"center",
    justifyContent:"center",
  }
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3">
      <h2 className="text-center text-primary">Add Todos?</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descrption" className="form-label">
            Todo Description
          </label>
          <textarea
            type="textarea"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="descrption"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary container" style={myStyle}>
          Add Todo
        </button>
      </form>
    </div>
  );
};
