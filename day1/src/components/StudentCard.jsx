function StudentCard({ name, course, status }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>Course: {course}</p>
      <span className={`status-badge status-${status.toLowerCase()}`}>
        {status}
      </span>
    </div>
  );
}

export default StudentCard;
