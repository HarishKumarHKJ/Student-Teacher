import React from "react";

const StudentList = ({ students, onDelete, onEdit }) => {
  return (
    <div className="list">
      <h3>Student List</h3>
      {students.length === 0 ? (
        <p>No students available</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <span>{student.name}</span>
              <span>{student.grade}</span>
              <button onClick={() => onEdit(student)}>Edit</button>
              <button onClick={() => onDelete(student.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
