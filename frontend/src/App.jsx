import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./services/auth";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthContext, { AuthProvider } from "./context/AuthContext";

import "./App.css";

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [editingStudent, setEditingStudent] = useState(null);
  const { user, logout } = useContext(AuthContext);

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const { data } = await getStudents();
      setStudents(data);
    } catch (error) {
      if (error.response?.status === 401) {
        logout();
      }
      showMessage("Failed to fetch students", "error");
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
      showMessage("Student added successfully!", "success");
      fetchStudents();
    } catch (error) {
      showMessage("Failed to add student", "error");
    }
  };

  const handleUpdate = async (id, student) => {
    try {
      await updateStudent(id, student);
      showMessage("Student updated successfully!", "success");
      setEditingStudent(null);
      fetchStudents();
    } catch (error) {
      showMessage("Failed to update student", "error");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?"))
      return;
    try {
      await deleteStudent(id);
      showMessage("Student deleted successfully!", "success");
      fetchStudents();
    } catch (error) {
      showMessage("Failed to delete student", "error");
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
      <div className="header">
        <h1>Student Dashboard</h1>
        <div className="user-info">
          <span>Welcome, {user?.username}</span>
          <button onClick={logout} className="btn-logout">
            Logout
          </button>
        </div>
      </div>

      {message.text && (
        <div className={`message ${message.type}`}>{message.text}</div>
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

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

function AppRoutes() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="loading">Loading authentication...</div>;
  }

  return (
    <Routes>
      {/* User Auth Routes */}
      <Route
        path="/login"
        element={user ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/dashboard" /> : <Register />}
      />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
