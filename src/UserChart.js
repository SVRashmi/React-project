import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, Legend, ResponsiveContainer
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d"]; 

const UserChart = () => {
  const [data, setData] = useState([
    { userType: "Faculty", count: 0 },
    { userType: "Student", count: 0 },
  ]);
  const [chartType, setChartType] = useState("bar"); 

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((posts) => {
        const counts = { Faculty: 0, Student: 0 };
        posts.forEach((user) => {
          const type = user.userType?.toLowerCase();
          if (type === "faculty") counts.Faculty += 1;
          if (type === "student") counts.Student += 1;
        });
        setData([
          { userType: "Faculty", count: counts.Faculty },
          { userType: "Student", count: counts.Student },
        ]);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const renderChart = () => {
    if (chartType === "pie") {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="userType"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      );
    } else {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="userType" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      );
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "auto" }}>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label style={{ marginRight: "10px" }}>Select Chart Type:</label>
        <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
          <option value="bar">Bar Chart</option>
          <option value="pie">Pie Chart</option>
        </select>
      </div>
      {renderChart()}
    </div>
  );
};

export default UserChart;
