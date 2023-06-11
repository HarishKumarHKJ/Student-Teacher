import React, { useState } from "react";

const TeacherForm = ({ teacher, onSubmit, onCancel }) => {
  const [name, setName] = useState(teacher ? teacher.name : "");
  const [email, setEmail] = useState(teacher ? teacher.email : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTeacher = { name, email };
    onSubmit(updatedTeacher);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h3>{teacher ? "Edit Teacher" : "Add Teacher"}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">{teacher ? "Update" : "Add"}</button>
        {teacher && <button onClick={onCancel}>Cancel</button>}
      </form>
    </div>
  );
};

export default TeacherForm;
