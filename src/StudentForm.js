import React, { useState } from "react";

const StudentForm = ({ student, onSubmit, onCancel }) => {
  const [name, setName] = useState(student ? student.name : "");
  const [email, setEmail] = useState(student ? student.email : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = { name, email };
    onSubmit(updatedStudent);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h3>{student ? "Edit Student" : "Add Student"}</h3>
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
        <button type="submit">{student ? "Update" : "Add"}</button>
        {student && <button onClick={onCancel}>Cancel</button>}
      </form>
    </div>
  );
};

export default StudentForm;
