import React, { useState } from "react";
import TeacherList from "./TeacherList";
import StudentList from "./StudentList";
import TeacherForm from "./TeacherForm";
import StudentForm from "./StudentForm";
import "./styles.css";

const App = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleCreateTeacher = (newTeacher) => {
    setTeachers([...teachers, newTeacher]);
  };

  const handleCreateStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleDeleteTeacher = (teacherId) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== teacherId));
  };

  const handleDeleteStudent = (studentId) => {
    setStudents(students.filter((student) => student.id !== studentId));
  };

  const handleUpdateTeacher = (updatedTeacher) => {
    setTeachers(
      teachers.map((teacher) =>
        teacher.id === updatedTeacher.id ? updatedTeacher : teacher
      )
    );
    setSelectedTeacher(null);
  };

  const handleUpdateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setSelectedStudent(null);
  };

  const handleEditTeacher = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleViewTeacher = (teacher) => {
    // Implement the logic to view teacher details
    console.log("Viewing teacher:", teacher);
  };

  const handleViewStudent = (student) => {
    // Implement the logic to view student details
    console.log("Viewing student:", student);
  };

  const handleCancelEdit = () => {
    setSelectedTeacher(null);
    setSelectedStudent(null);
  };

  return (
    <div className="container">
      <h1>Teacher and Student Management Dashboard</h1>
      <div className="dashboard">
        <div className="section">
          <h2>Teachers</h2>
          {selectedTeacher ? (
            <TeacherForm
              teacher={selectedTeacher}
              onSubmit={handleUpdateTeacher}
              onCancel={handleCancelEdit}
            />
          ) : (
            <TeacherForm onSubmit={handleCreateTeacher} />
          )}
          <TeacherList
            teachers={teachers}
            onDelete={handleDeleteTeacher}
            onEdit={handleEditTeacher}
            onView={handleViewTeacher}
          />
        </div>
        <div className="section">
          <h2>Students</h2>
          {selectedStudent ? (
            <StudentForm
              student={selectedStudent}
              onSubmit={handleUpdateStudent}
              onCancel={handleCancelEdit}
            />
          ) : (
            <StudentForm onSubmit={handleCreateStudent} />
          )}
          <StudentList
            students={students}
            onDelete={handleDeleteStudent}
            onEdit={handleEditStudent}
            onView={handleViewStudent}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
