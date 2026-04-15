import { useState } from "react";

function AddStudent({ onAdd }) {
  const [formData, setFormData] = useState({ name: "", course: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.course.trim()) {
      onAdd(formData);
      setFormData({ name: "", course: "" });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="add-student-form">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter student name"
        className="student-input"
      />
      <input
        type="text"
        name="course"
        value={formData.course}
        onChange={handleChange}
        placeholder="Enter course"
        className="student-input"
      />
      <button type="submit" className="add-btn">
        Add Student
      </button>
    </form>
  );
}

export default AddStudent;
