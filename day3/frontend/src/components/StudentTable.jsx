function StudentTable({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return <div className="no-data">No students found. Add one above!</div>;
  }

  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student._id}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>
              <button onClick={() => onEdit(student)} className="btn-edit">
                Edit
              </button>
              <button onClick={() => onDelete(student._id)} className="btn-delete">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
