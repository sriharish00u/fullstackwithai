import { useState, useEffect } from 'react';

function StudentForm({ onAdd, onUpdate, editingStudent, onCancelEdit }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setAge(editingStudent.age.toString());
    }
  }, [editingStudent]);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!age) newErrors.age = 'Age is required';
    else if (parseInt(age) <= 0) newErrors.age = 'Age must be positive';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const student = { name: name.trim(), age: parseInt(age) };
    
    if (editingStudent) {
      onUpdate(editingStudent._id, student);
    } else {
      onAdd(student);
    }
    
    setName('');
    setAge('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>{editingStudent ? 'Edit Student' : 'Add Student'}</h2>
      
      <div className="form-group">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div className="form-group">
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={errors.age ? 'error' : ''}
        />
        {errors.age && <span className="error-text">{errors.age}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {editingStudent ? 'Update' : 'Add'}
        </button>
        {editingStudent && (
          <button type="button" onClick={onCancelEdit} className="btn-secondary">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default StudentForm;
