import React from 'react'

function About() {
    const aboutContainterStyle = {
        display: "flex",
        flexDirection: "column",
        margin: "48px",
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "16px"
    }
  return (
    <div style={aboutContainterStyle}>
        <h1>About the project</h1>
        <p>Daily is a sleek and intuitive todo task application built using React, designed to streamline your daily productivity. With Taskify, you can effortlessly manage all your tasks and their states, ensuring nothing falls through the cracks and every project stays on track.</p>

    </div>
  )
}

export default About