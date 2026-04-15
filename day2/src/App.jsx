import { useState } from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import Users from "./components/Users";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (studentData) => {
    const newStudent = {
      id: Date.now(),
      ...studentData,
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="app">
      <h1>Student Manager</h1>

      <div className="sections">
        <section className="section">
          <AddStudent onAdd={addStudent} />
          <StudentList students={students} />
        </section>

        <section className="section">
          <Users />
        </section>
      </div>
    </div>
  );
}

export default App;
