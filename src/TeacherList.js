import React from "react";

const TeacherList = ({ teachers, onDelete, onEdit }) => {
  return (
    <div className="list">
      <h3>Teacher List</h3>
      {teachers.length === 0 ? (
        <p>No teachers available</p>
      ) : (
        <ul>
          {teachers.map((teacher) => (
            <li key={teacher.id}>
              <span>{teacher.name}</span>
              <span>{teacher.subject}</span>
              <button onClick={() => onEdit(teacher)}>Edit</button>
              <button onClick={() => onDelete(teacher.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeacherList;
