import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useInView } from "react-intersection-observer";
import "./IndustriesGraph.css";

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

const colors = [
  "#007bff", "#28a745", "#dc3545", "#ffc107", "#6610f2",
  "#17a2b8", "#fd7e14", "#6c757d", "#e83e8c", "#20c997", "#f8f9fa"
];

function IndustriesGraph() {
  // 👇 Scroll Detection using useInView
  const { ref, inView } = useInView({
    triggerOnce: false,  // Change to true if you want animation only once
    threshold: 0.2, // 20% visibility to trigger
  });

  return (
    <div className='container'>
      <h4 className='text-center text-primary'><b>Why Choose AI</b></h4>
      <h2 className='mb-4 text-center'>Defining AI Leaders</h2>

      <div className="text-left border-0 rounded-4 mx-auto pb-5">
        <div className="border border_customise mb-3">
          <div className="text-dark">
            <div className='row p-4'>
            <p className="font-change">The Executive Program in Applied Generative AI caters to working professionals across different industries. Learner diversity adds richness to class discussions and interactions.</p>
              <div className='col-lg-6 col-sm-12'>
               
                <div ref={ref}>
                  {inView && ( // 👈 Only render PieChart when in view
                    <ResponsiveContainer width="100%" height={400} className="mb-5">
                      <PieChart>
                        <Pie
                          data={data}
                          dataKey="percentage"
                          nameKey="category"
                          cx="50%"
                          cy="50%"
                          outerRadius={120}
                          label
                        >
                          {data.map((entry, index) => (
                            <Cell key={index} fill={colors[index % colors.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </div>
                <p className="text-muted small text-center">
                  Source: S&P Global Market Intelligence 451 Research Global Trends in AI custom survey, 2024.
                </p>
              </div>
              <div className='col-lg-6 col-sm-12'>
              <div className="row m-5">
                <div className="col-md-4">
                  <img src={`${process.env.PUBLIC_URL}/Images/Google-Logo.png`} className="brand_name" alt="Company name"/>
                </div>
                <div className="col-md-4">
                <img src={`${process.env.PUBLIC_URL}/Images/linkedin_1.png`} className="brand_name" alt="Company name"/>
                </div>
                <div className="col-md-4">
                <img src={`${process.env.PUBLIC_URL}/Images/microsoft.png`} className="brand_name" alt="Company name"/>
                </div>
               
              </div>
              <div className="row m-5">
                <div className="col-md-4">
                <img src={`${process.env.PUBLIC_URL}/Images/Nvidia_IT.jpg`} className="brand_name" alt="Company name"/>
                </div>
                <div className="col-md-4">
                <img src={`${process.env.PUBLIC_URL}/Images/Netflix.png`} className="brand_name" alt="Company name"/>
                </div>
                <div className="col-md-4">
                <img src={`${process.env.PUBLIC_URL}/Images/IMB_IT.jpg`} className="brand_name" alt="Company name"/>
                </div>
                
              </div>
              <div className="row m-5">
                 <div className="col-md-4">
                <img src={`${process.env.PUBLIC_URL}/Images/Google-Logo.png`} className="brand_name" alt="Company name"/>
                </div>
                 <div className="col-md-4">
                <img src={`${process.env.PUBLIC_URL}/Images/Google-Logo.png`} className="brand_name" alt="Company name"/>
                </div>
                 <div className="col-md-4">
                <img src={`${process.env.PUBLIC_URL}/Images/Google-Logo.png`} className="brand_name" alt="Company name"/>
                </div>
                
              </div>
              <div className="row m-5">
                 <div className="col-md-4">
                <img src={`${process.env.PUBLIC_URL}/Images/Google-Logo.png`} className="brand_name" alt="Company name"/>
                </div>
                 <div className="col-md-4">
                <img src={`${process.env.PUBLIC_URL}/Images/Google-Logo.png`} className="brand_name" alt="Company name"/>
                </div>
                 <div className="col-md-4">
                <img src={`${process.env.PUBLIC_URL}/Images/Google-Logo.png`} className="brand_name" alt="Company name"/>
                </div>
                
              </div>
               
              </div>
            </div>
          </div>        
        </div>
      </div>
    </div>
  );
}

export default IndustriesGraph;
