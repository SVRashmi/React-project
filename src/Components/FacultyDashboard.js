import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FacultyDashboard.css"; 
import { v4 as uuidv4 } from "uuid"; 
const FacultyDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const loggedInFaculty = location.state;
    
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({
        title: "",
        description: "",
        duration: "",
        imageUrl: "null", 
    });
    const [editingCourseId, setEditingCourseId] = useState(null);
    const [schedule, setSchedule] = useState([]);
    const [newMeeting, setNewMeeting] = useState({
        topic: "",
        date: "",
        time: "",
        selectedStudents: []
    });
    
    useEffect(() => {
        if (!loggedInFaculty) {
            toast.error("No faculty data found. Redirecting to login.");
            navigate("/"); // Redirect if no faculty info
            return;
        }
        fetchCourses();
        fetchSchedule();
    }, [loggedInFaculty, navigate]);
    
    const fetchCourses = async () => {
        if (!loggedInFaculty || !loggedInFaculty.id) return;
        try {
            const res = await axios.get("http://localhost:3002/courses");
            const facultyCourses = res.data.filter(
                (c) => c.facultyId === loggedInFaculty.id
            );
            setCourses(facultyCourses);
        } catch (err) {
            toast.error("Failed to fetch courses");
            console.error("Fetch courses error:", err);
        }
    };
    
    const fetchSchedule = async () => {
        if (!loggedInFaculty || !loggedInFaculty.id) return;
        try {
            const res = await axios.get("http://localhost:3002/schedule");
            const mySchedule = res.data.filter(
                (m) => m.facultyId === loggedInFaculty.id
            );
            setSchedule(mySchedule);
        } catch (err) {
            toast.error("Failed to fetch schedule");
            console.error("Fetch schedule error:", err);
        }
    };
    const [students, setStudents] = useState([]);
    
    const fetchStudents = async () => {
        try {
            const res = await axios.get("http://localhost:3002/posts");
            const studentUsers = res.data.filter(user => user.userType === "Student");
            setStudents(studentUsers);
        } catch (err) {
            console.error("Error fetching students", err);
        }
    };
    
    useEffect(() => {
        fetchStudents();
    }, []);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCourse((prevCourse) => ({
            ...prevCourse,
            [name]: value,
        }));
    };
    
    const handleCourseSubmit = async (e) => {
        e.preventDefault();
        if (!newCourse.title || !newCourse.description || !newCourse.duration) {
            toast.warn("Please fill in all course details.");
            return;
        }
        
        try {
            let imageBase64 = "";
            if (newCourse.imageFile) {
                imageBase64 = await convertToBase64(newCourse.imageFile);
            }
            
            const courseData = {
                title: newCourse.title,
                description: newCourse.description,
                duration: newCourse.duration,
                imageUrl: imageBase64, // send base64 string to backend
                facultyId: loggedInFaculty.id,
            };
            
            if (editingCourseId) {
                await axios.put(`http://localhost:3002/courses/${editingCourseId}`, courseData);
                toast.success("Course updated successfully");
            } else {
                await axios.post("http://localhost:3002/courses", courseData);
                toast.success("Course added successfully");
            }
            
            // Reset form
            setNewCourse({ title: "", description: "", duration: "", imageFile: null });
            setEditingCourseId(null);
            fetchCourses();
        } catch (err) {
            toast.error("Error saving course");
            console.error("Save course error:", err);
        }
    };
    
    
    const handleEditCourse = (course) => {
        setEditingCourseId(course.id);
        setNewCourse({
            title: course.title,
            description: course.description,
            duration: course.duration || "",
            imageUrl: course.imageUrl || "",
        });
    };
    
    const handleMeetingSubmit = async (e) => {
        e.preventDefault();
        if (!newMeeting.topic || !newMeeting.date || !newMeeting.time) {
            toast.warn("Please fill in all meeting details.");
            return;
        }
        
        try {
            const meetingId = uuidv4(); // generate unique meeting ID
            const meetingUrl = `https://meet.jit.si/${meetingId}`;
            
            await axios.post("http://localhost:3002/schedule", {
                ...newMeeting,
                facultyId: loggedInFaculty.id,
                meetingId,
                meetingUrl,
            });
            
            toast.success("Meeting scheduled");
            setNewMeeting({ topic: "", date: "", time: "" });
            fetchSchedule();
        } catch (err) {
            toast.error("Error scheduling meeting");
            console.error("Schedule meeting error:", err);
        }
        
        
    };
    const handleLogout = () => {
        toast.info("Logging out...");
        // Perform any other logout actions if needed (e.g., clearing local storage)
        navigate("/");
    };
    const convertToBase64 = (file) =>
        new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
    
    if (!loggedInFaculty) {
        return <div className="loading-container"><p>Loading faculty data or redirecting...</p></div>; // Or a spinner
    }
    
    return (
        <div className="faculty-dashboard">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        <header className="dashboard-header">
        <h1>Welcome, {loggedInFaculty.name}</h1>
        <button className="btn btn-light" onClick={handleLogout}>
        Logout
        </button>
        </header>
        
        <div className="dashboard-content">
        <section className="content-section manage-courses-section">
        <h2>{editingCourseId ? "Edit Course" : "Add New Course"}</h2>
        <form onSubmit={handleCourseSubmit} className="course-form">
        <div className="form-group">
        <label htmlFor="title">Course Title</label>
        <input
        type="text"
        id="title"
        name="title"
        placeholder="e.g., Introduction to React"
        value={newCourse.title}
        onChange={handleInputChange}
        required
        className="form-control"
        />
        </div>
        <div className="form-group">
        <label htmlFor="description">Course Description</label>
        <textarea
        id="description"
        name="description"
        placeholder="Detailed description of the course"
        value={newCourse.description}
        onChange={handleInputChange}
        required
        className="form-control"
        rows="3"
        />
        </div>
        <div className="form-group">
        <label htmlFor="duration">Course Duration</label>
        <input
        type="text"
        id="duration"
        name="duration"
        placeholder="e.g., 8 Weeks, 30 Hours"
        value={newCourse.duration}
        onChange={handleInputChange}
        required
        className="form-control"
        />
        </div>
        <div className="form-group">
        <label htmlFor="imageFile">Upload Course Image</label>
        <input
        type="file"
        id="imageFile"
        name="imageFile"
        accept="image/*"
        onChange={(e) =>
            setNewCourse({ ...newCourse, imageFile: e.target.files[0] })
        }
        className="form-control"
        />
        </div>
        <button type="submit" className="btn btn-primary btn-submit-course">
        {editingCourseId ? "Update Course" : "Add Course"}
        </button>
        {editingCourseId && (
            <button
            type="button"
            className="btn btn-cancel-edit"
            onClick={() => {
                setEditingCourseId(null);
                setNewCourse({ title: "", description: "", duration: "", imageUrl: "" });
            }}
            >
            Cancel Edit
            </button>
        )}
        </form>
        
        <h3>Your Courses</h3>
        {courses.length === 0 ? (
            <p>You have not added any courses yet.</p>
        ) : (
            <div className="courses-list">
            {courses.map((course) => (
                <div key={course.id} className="course-card">
                <img
                src={course.imageUrl || "https://via.placeholder.com/300x200?text=No+Image"}
                alt={course.title}
                className="course-image"
                />
                <div className="course-card-content">
                <h4>{course.title}</h4>
                <p className="course-description">{course.description}</p>
                <p className="course-duration"><strong>Duration:</strong> {course.duration}</p>
                <button
                className="btn btn-secondary btn-edit-course"
                onClick={() => handleEditCourse(course)}
                >
                Edit
                </button>
                </div>
                </div>
            ))}
            </div>
        )}
        </section>
        
        <section className="content-section schedule-meeting-section">
        <h2>Schedule New Meeting</h2>
        <form onSubmit={handleMeetingSubmit} className="meeting-form">
        <div className="form-group">
        <label htmlFor="topic">Meeting Topic</label>
        <input
        type="text"
        id="topic"
        name="topic"
        placeholder="e.g., Project Discussion"
        value={newMeeting.topic}
        onChange={(e) => setNewMeeting({ ...newMeeting, topic: e.target.value })}
        required
        className="form-control"
        />
        </div>
        <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
        type="date"
        id="date"
        name="date"
        value={newMeeting.date}
        onChange={(e) => setNewMeeting({ ...newMeeting, date: e.target.value })}
        required
        className="form-control"
        />
        </div>
        <div className="form-group">
        <label htmlFor="time">Time</label>
        <input
        type="time"
        id="time"
        name="time"
        value={newMeeting.time}
        onChange={(e) => setNewMeeting({ ...newMeeting, time: e.target.value })}
        required
        className="form-control"
        />
        </div>
         <div className="form-group">
        <label>Assign to Students</label>
        <select
        multiple
        className="form-control"
        value={newMeeting.selectedStudents}
        onChange={(e) =>
            setNewMeeting({
                ...newMeeting,
                selectedStudents: Array.from(e.target.selectedOptions, option => option.value)
            })
        }
        >
        {students.map((student) => (
            <option key={student.id} value={student.id}>
            {student.name} ({student.email})
            </option>
        ))}
        </select>
        </div>
        <button type="submit" className="btn btn-success btn-schedule-meeting">
        Schedule Meeting
        </button>
        </form>
       
        
        <h3>Your Scheduled Meetings</h3>
        {schedule.length === 0 ? (
            <p>You have no meetings scheduled.</p>
        ) : (
            <ul className="meeting-list">
            {schedule.map((meet, index) => (
                <li key={index} className="meeting-item">
                <strong>{meet.topic}</strong> - {new Date(meet.date).toLocaleDateString()} at {meet.time}
                {meet.meetingUrl && (
                    <a
                    href={meet.meetingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-join-meeting"
                    style={{ marginLeft: "10px" }}
                    >
                    Join Meeting
                    </a>
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

export default FacultyDashboard;