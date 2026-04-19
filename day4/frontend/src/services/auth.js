import axios from "axios";

axios.defaults.withCredentials = true;

const API_URL = "http://localhost:5000";

export const getToken = () => localStorage.getItem("token");
export const getUsername = () => localStorage.getItem("username");

export const setAuth = (token, username) => {
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
};

export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
};

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const register = async (username, password) => {
  const response = await axios.post(`${API_URL}/register`, {
    username,
    password,
  });
  return response.data;
};

export const getProfile = async () => {
  const response = await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return response.data;
};

export const getStudents = () =>
  axios.get(`${API_URL}/students`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

export const addStudent = (student) =>
  axios.post(`${API_URL}/students`, student, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

export const updateStudent = (id, student) =>
  axios.put(`${API_URL}/students/${id}`, student, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

export const deleteStudent = (id) =>
  axios.delete(`${API_URL}/students/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
