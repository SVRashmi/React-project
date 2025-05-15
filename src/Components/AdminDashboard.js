import React, { useEffect, useState } from "react";
import axios from "axios";
import UserChart from "../UserChart"; 
import {useLocation , useNavigate} from 'react-router-dom'  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const loggedInAdmin = location.state; 
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", email: "", userType: "" });
  const [error, setError] = useState("");
  

  // New State for Add User
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", userType: "Student" });
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  useEffect(() => {
    applyFilterAndSort();
  }, [users, filter, sortField, sortOrder]);

  const fetchUsers = async () => {
        toast.success(`Welcome ${users.name}!`);
    try {
      const response = await axios.get("http://localhost:3002/posts");
      setUsers(response.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setError("Failed to load user data.");
    }
  };
  
  const applyFilterAndSort = () => {
    let updatedUsers = [...users];
    if (filter !== "All") {
      updatedUsers = updatedUsers.filter((user) => user.userType === filter);
    }
    
    if (sortField) {
      updatedUsers.sort((a, b) => {
        const aValue = a[sortField].toLowerCase();
        const bValue = b[sortField].toLowerCase();
        
        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }
    
    setFilteredUsers(updatedUsers);
  };
  
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };
  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:3002/posts/${id}`);
        toast.success("User deleted successfully!");
        fetchUsers();
      } catch (err) {
        console.error("Delete failed:", err);
        alert("Failed to delete user.");
      }
    }
  };
  
  const handleEditClick = (user) => {
    setEditingUser(user.id);
    setEditForm({ name: user.name, email: user.email, userType: user.userType });
  };
  
  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };
  
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3002/posts/${editingUser}`, {
        id: editingUser,
        ...editForm,
      });
      toast.success("User updated successfully!");
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      console.error("Edit failed:", err);
     toast.error("Failed to update user.");
    }
  };
  
  const handleAddUserChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  
  const handleAddUserSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3002/posts");
      const existing = response.data.find(u => u.email.toLowerCase() === newUser.email.toLowerCase());
      if (existing) {
        toast.error("Email already exists.");
        return;
      }
      await axios.post("http://localhost:3002/posts", newUser);
      toast.success("User added successfully!");
      setNewUser({ name: "", email: "", password: "", userType: "Student" });
      fetchUsers();
    } catch (err) {
      console.error("Add user failed:", err);
      alert("Failed to add user.");
    }
  };
  
  const handleLogout = () => {
    navigate("/"); // or navigate("/Login");
  };
  
  return (
    
    <div>
      
      <ToastContainer position="top-center" autoClose={2000} />
    <section className="bg-black text-white text-center py-4">
    
    <div className="container">
    <div className="d-flex justify-content-between align-items-center">
    <h2>Welcome, {loggedInAdmin?.name || "Admin"}</h2>
    <div>
    <button className="btn btn-light" onClick={handleLogout}>Logout</button>
    </div>
    </div>
    </div>
    </section>
    
    <div className="container mt-5">
    <h4>Admin Dashboard</h4>
    
    
    {filteredUsers.length > 0 ? (
      <table className="table table-bordered mt-3">
      <thead className="table-light">
      <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>User Type</th>
      <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {filteredUsers.map((u, index) => (
        <tr key={u.id}>
        <td>{index + 1}</td>
        <td>
        {editingUser === u.id ? (
          <input
          type="text"
          name="name"
          value={editForm.name}
          onChange={handleEditChange}
          className="form-control"
          />
        ) : (
          u.name
        )}
        </td>
        <td>
        {editingUser === u.id ? (
          <input
          type="email"
          name="email"
          value={editForm.email}
          onChange={handleEditChange}
          className="form-control"
          />
        ) : (
          u.email
        )}
        </td>
        <td>
        {editingUser === u.id ? (
          <select
          name="userType"
          value={editForm.userType}
          onChange={handleEditChange}
          className="form-select"
          >
          <option value="Faculty">Faculty</option>
          <option value="Student">Student</option>
          <option value="Admin">Admin</option>
          </select>
        ) : (
          u.userType
        )}
        </td>
        <td>
        {editingUser === u.id ? (
          <>
          <button className="btn btn-success btn-sm me-2" onClick={handleEditSubmit}>
          Save
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => setEditingUser(null)}>
          Cancel
          </button>
          </>
        ) : (
          <>
          <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(u)}>
          Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(u.id)}>
          Delete
          </button>
          </>
        )}
        </td>
        </tr>
      ))}
      </tbody>
      </table>
    ) : (
      <p className="mt-3">No users found.</p>
    )}
    
    <h4 className="mt-5">User Data Chart</h4>
    <UserChart />
    <section>
    <h4 className="mb-4">Add New User (Student/Faculty)</h4>
    <form onSubmit={handleAddUserSubmit} className="row g-3">
    <div className="col-md-4">
    <input type="text" className="form-control" name="name" value={newUser.name} onChange={handleAddUserChange} placeholder="Name" required />
    </div>
    <div className="col-md-4">
    <input type="email" className="form-control" name="email" value={newUser.email} onChange={handleAddUserChange} placeholder="Email" required />
    </div>
    <div className="col-md-2">
    <input type="password" className="form-control" name="password" value={newUser.password} onChange={handleAddUserChange} placeholder="Password" required />
    </div>
    <div className="col-md-2">
    <select className="form-select" name="userType" value={newUser.userType} onChange={handleAddUserChange}>
    <option value="Student">Student</option>
    <option value="Faculty">Faculty</option>
    </select>
    </div>
    <div className="col-4 offset-4">
    <button className="btn btn-primary" type="submit">Add User</button>
    </div>
    </form>
    
    <hr className="my-4" />
    </section>
    
    </div>
    </div>
  );
}

export default AdminDashboard;
