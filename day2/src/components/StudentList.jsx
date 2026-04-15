function StudentList({ students }) {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p className="empty-message">No students yet. Add one above!</p>
      ) : (
        <ul className="list">
          {students.map((student) => (
            <li key={student.id} className="list-item">
              {student.name} - {student.course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
