import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import "./IndustriesGraph.css"
const data = [
    { category: "Healthcare", percentage: 18 },
    { category: "Government", percentage: 15 },
    { category: "Media/Entertainment", percentage: 15 },
    { category: "Enterprises (10k-25k)", percentage: 16 },
    { category: "Midsized (1k-5k)", percentage: 14 },
    { category: "Large (5k-10k)", percentage: 12 },
    { category: "North America", percentage: 16 },
    { category: "APAC", percentage: 8 },
    { category: "EMEA", percentage: 6 },
    { category: "AI Providers", percentage: 15 },
    { category: "Organizations", percentage: 10 },
];

// 🎨 Define Colors for Each Bar
const colors = [
    "#007bff", "#28a745", "#dc3545", "#ffc107", "#6610f2",
    "#17a2b8", "#fd7e14", "#6c757d", "#e83e8c", "#20c997", "#f8f9fa"
];
function IndustriesGraph() {
    return (
        <div className='container '>
        
        <p className='text-center  text-primary mt-5 pt-5'><b>Why Choose AI</b></p>
        <h3 className='mb-4 text-center '>Defining AI leaders </h3>
        
        <div className="card text-left shadow-lg border-0 rounded-4 mx-auto" >
        <div className="card-body">
        
        
        <p className="card-text text-dark">
        <div className='row'>
        <div className='col-md-6'><p>Artificial Intelligence (AI) is transforming industries, revolutionizing businesses, and reshaping the future of work. Whether you're a student, a professional, or an entrepreneur, AI skills can open doors to exciting career opportunities and innovation. Here’s why you should choose AI:</p>
        <ul>
        <li>High Demand & Career Growth – AI professionals are among the most sought-after experts globally, with opportunities in fields like Data Science, Machine Learning, and Robotics.</li>
        <li>Innovation & Problem-Solving – AI enables businesses to automate tasks, analyze massive datasets, and make data-driven decisions, leading to smarter solutions.</li>
        <li>Cross-Industry Applications – AI is used in healthcare, finance, marketing, education, and beyond, offering diverse career paths.</li>
        <li>Competitive Edge – Understanding AI gives you a competitive advantage, allowing you to stay ahead in a rapidly evolving digital world.</li>
        </ul>
        </div>
        <div className='col-md-6'>
        
        <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} layout="vertical" margin={{ left: 50 }}>
        <XAxis type="number" />
        <YAxis dataKey="category" type="category" width={150} />
        <Tooltip />
        <Legend />
        <Bar dataKey="percentage">
        {data.map((entry, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
        ))}
        </Bar>
        </BarChart>
        </ResponsiveContainer>
        <p className="text-muted small text-center">
        Source: S&P Global Market Intelligence 451 Research Global Trends in AI custom survey, 2024.
        </p>
        </div>   
        </div>
        </p>
        </div>
        </div>
        
        
        
        </div>
    )
}

export default IndustriesGraph