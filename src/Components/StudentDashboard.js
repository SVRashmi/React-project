import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./StudentDashboard.css"; 

const StudentDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loggedInStudent = location.state;

  const [allCourses, setAllCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [myMeetings, setMyMeetings] = useState([]);

  useEffect(() => {
    if (!loggedInStudent) {
      toast.error("No student data found. Redirecting...");
      navigate("/");
      return;
    }

    fetchAllCourses();
    fetchEnrollments();
    fetchMyMeetings();
  }, [loggedInStudent]);

  const fetchAllCourses = async () => {
    try {
      const res = await axios.get("http://localhost:3002/courses");
      setAllCourses(res.data);
    } catch (err) {
      toast.error("Failed to fetch courses");
      console.error(err);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3002/enrollments?studentId=${loggedInStudent.id}`
      );
      setEnrollments(res.data);
      // Get full course objects
      const courseIds = res.data.map((e) => e.courseId);
      const enrolledCourses = await axios.get("http://localhost:3002/courses");
      const filtered = enrolledCourses.data.filter((c) =>
        courseIds.includes(c.id)
      );
      setMyCourses(filtered);
    } catch (err) {
      toast.error("Failed to fetch enrollments");
      console.error(err);
    }
  };

  const fetchMyMeetings = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3002/schedule?studentId=${loggedInStudent.id}`
      );
      setMyMeetings(res.data);
    } catch (err) {
      toast.error("Failed to fetch meetings");
      console.error(err);
    }
  };

  const handleEnroll = async (courseId) => {
    const alreadyEnrolled = enrollments.some((e) => e.courseId === courseId);
    if (alreadyEnrolled) {
      toast.info("Already enrolled in this course");
      return;
    }

    try {
      await axios.post("http://localhost:3002/enrollments", {
        studentId: loggedInStudent.id,
        courseId: courseId,
      });
      toast.success("Enrolled successfully");
      fetchEnrollments(); // Refresh
    } catch (err) {
      toast.error("Failed to enroll");
      console.error(err);
    }
  };

  const handleLogout = () => {
    toast.info("Logging out...");
    navigate("/");
  };

  return (
    <div className="student-dashboard">
      <ToastContainer position="top-right" autoClose={3000} />

      <header className="dashboard-header">
        <h1>Welcome, {loggedInStudent.name}</h1>
        <button className="btn btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="dashboard-content">
        {/* All Available Courses */}
        <section className="content-section">
          <h2>Available Courses</h2>
          {allCourses.length === 0 ? (
            <p>No courses available right now.</p>
          ) : (
            <div className="courses-list">
              {allCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <img
                    src={course.imageUrl || "https://via.placeholder.com/300x200?text=No+Image"}
                    alt={course.title}
                    className="course-image"
                  />
                  <div className="course-card-content">
                    <h4>{course.title}</h4>
                    <p>{course.description}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEnroll(course.id)}
                      disabled={enrollments.some((e) => e.courseId === course.id)}
                    >
                      {enrollments.some((e) => e.courseId === course.id)
                        ? "Enrolled"
                        : "Enroll"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Enrolled Courses */}
        <section className="content-section">
          <h2>Your Enrolled Courses</h2>
          {myCourses.length === 0 ? (
            <p>You haven’t enrolled in any courses yet.</p>
          ) : (
            <div className="courses-list">
              {myCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <img
                    src={course.imageUrl || "https://via.placeholder.com/300x200?text=No+Image"}
                    alt={course.title}
                    className="course-image"
                  />
                  <div className="course-card-content">
                    <h4>{course.title}</h4>
                    <p>{course.description}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Scheduled Meetings */}
        <section className="content-section">
          <h2>Your Scheduled Meetings</h2>
          {myMeetings.length === 0 ? (
            <p>No meetings scheduled for you.</p>
          ) : (
            <ul className="meeting-list">
              {myMeetings.map((meeting) => (
                <li key={meeting.id}>
                  <strong>{meeting.topic}</strong> —{" "}
                  {new Date(meeting.date).toLocaleDateString()} at {meeting.time}
                  {meeting.meetingUrl && (
                    <>
                      {" "}
                      | <a href={meeting.meetingUrl} target="_blank" rel="noreferrer">Join</a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
