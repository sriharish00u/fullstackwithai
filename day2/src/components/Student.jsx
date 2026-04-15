function Student({ name, age }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

export default Student;
