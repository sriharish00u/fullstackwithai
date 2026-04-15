import StudentCard from "./components/StudentCard";
import InputForm from "./components/InputForm";
import "./App.css";

const students = [
  {
    id: 1,
    name: "Alice Johnson",
    course: "Computer Science",
    status: "Active",
  },
  { id: 2, name: "Bob Smith", course: "Mathematics", status: "Active" },
  { id: 3, name: "Charlie Brown", course: "Physics", status: "Inactive" },
  { id: 4, name: "Diana Prince", course: "Biology", status: "Active" },
  { id: 5, name: "Ethan Hunt", course: "Chemistry", status: "Active" },
];

function App() {
  return (
    <div className="container">
      <h1>Student Directory</h1>
      <div className="student-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            status={student.status}
          />
        ))}
      </div>
      <InputForm />
    </div>
  );
}

export default App;
