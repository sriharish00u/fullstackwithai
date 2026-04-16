import { useState, useEffect } from 'react';
import { getStudents, addStudent, updateStudent, deleteStudent } from './services/api';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [editingStudent, setEditingStudent] = useState(null);

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const { data } = await getStudents();
      setStudents(data);
    } catch (error) {
      showMessage('Failed to fetch students', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAdd = async (student) => {
    try {
      await addStudent(student);
      showMessage('Student added successfully!', 'success');
      fetchStudents();
    } catch (error) {
      showMessage('Failed to add student', 'error');
    }
  };

  const handleUpdate = async (id, student) => {
    try {
      await updateStudent(id, student);
      showMessage('Student updated successfully!', 'success');
      setEditingStudent(null);
      fetchStudents();
    } catch (error) {
      showMessage('Failed to update student', 'error');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return;
    try {
      await deleteStudent(id);
      showMessage('Student deleted successfully!', 'success');
      fetchStudents();
    } catch (error) {
      showMessage('Failed to delete student', 'error');
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <StudentForm 
        onAdd={handleAdd} 
        onUpdate={handleUpdate}
        editingStudent={editingStudent}
        onCancelEdit={handleCancelEdit}
      />

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <StudentTable 
          students={students} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      )}
    </div>
  );
}

export default App;
