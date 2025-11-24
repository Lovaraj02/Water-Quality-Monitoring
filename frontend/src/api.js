import axios from 'axios';

const API_URL = 'https://water-quality-monitoring-da7r.onrender.com';

// USERS
export const loginUser = (user) => axios.post(`${API_URL}/api/users/login`, user);
export const getAllUsers = () => axios.get(`${API_URL}/api/users`);
export const createUser = (user) => axios.post(`${API_URL}/api/users`, user);
export const getUserById = (id) => axios.get(`${API_URL}/api/users/${id}`);
export const updateUser = (id, user) => axios.put(`${API_URL}/api/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/api/users/${id}`);

// COMPLAINTS – matches your backend exactly
export const getAllComplaints = () => axios.get(`${API_URL}/api/complaints/getAll`);
export const createComplaint = (complaint) => axios.post(`${API_URL}/api/complaints/add`, complaint);
export const getComplaintById = (id) => axios.get(`${API_URL}/api/complaints/${id}`);
export const updateComplaint = (id, complaint) => axios.put(`${API_URL}/api/complaints/${id}`, complaint);
export const deleteComplaint = (id) => axios.delete(`${API_URL}/api/complaints/${id}`);
