import React, { useEffect, useState } from "react";
import axios from "axios";
import UserChart from "../UserChart";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", email: "", userType: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    applyFilterAndSort();
  }, [users, filter, sortField, sortOrder]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
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
        await axios.delete(`http://localhost:3001/posts/${id}`);
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
      await axios.put(`http://localhost:3001/posts/${editingUser}`, {
        id: editingUser,
        ...editForm,
      });
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      console.error("Edit failed:", err);
      alert("Failed to update user.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      {error && <p className="text-danger">{error}</p>}

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <label className="me-2">Filter by User Type:</label>
          <select value={filter} onChange={handleFilterChange} className="form-select d-inline-block w-auto">
            <option value="All">All</option>
            <option value="Faculty">Faculty</option>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div>
          <strong>Sort by:</strong>{" "}
          <button className="btn btn-link" onClick={() => handleSort("name")}>
            Name {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}
          </button>
          <button className="btn btn-link" onClick={() => handleSort("email")}>
            Email {sortField === "email" && (sortOrder === "asc" ? "↑" : "↓")}
          </button>
          <button className="btn btn-link" onClick={() => handleSort("userType")}>
            User Type {sortField === "userType" && (sortOrder === "asc" ? "↑" : "↓")}
          </button>
        </div>
      </div>

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

      <h1 className="mt-5">User Data Chart</h1>
      <UserChart />
    </div>
  );
}

export default AdminDashboard;
