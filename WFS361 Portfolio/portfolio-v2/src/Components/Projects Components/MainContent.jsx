import React from "react";

function MainContent() {
    return (
        <div>
            <h1 className="projects-header">PROJECTS</h1>
            <div>
                <p className="introduction">These are a few of my projects I’ve worked. All of my projects and their code is available on my GitHub profile.</p>
            </div>
            <div className="blogapp-project">
                <h2>Blog App</h2>
                    <p>For one of my modules I had a project which required me and my team to create a Blog App website. The code used for this website comprised of mainly HTML, CSS, Ruby on Rails, and a bit of JavaScript.</p>
                    <p>All the precise amount used can be viewed on my GitHub profile.</p>
                <button 
                    className="view-project"
                    onClick={() => window.open("https://github.com/JohnyBoy00/BlogApp", "_blank", "noopener noreferrer")}
                >
                    View Project
                </button>
            </div>
            <div className="register-form">
                <h2>Register Form</h2>
                    <p>This is a simple register form project I created to be used in any React program. The purpose of this project was to experiment with different approaches to creating registration forms.</p>
                    <p>The form at the moment doesn't have any validation methods, in the future I will update this. The project can also be viewed on my GitHub profile.</p>
                <button 
                    className="view-project"
                    onClick={() => window.open("https://github.com/JohnyBoy00/register-form", "_blank", "noopener noreferrer")}
                >
                    View Project
                </button>
            </div>
            <div className="grocery-list">
                <h2>Grocery List App</h2>
                    <p>This is also simple app made with the use of React to add items on list for your groceries. Each item can be added to their respective category.</p>
                    <p>This can also be viewed on my GitHub profile.</p>
                <button 
                    className="view-project"
                    onClick={() => window.open("https://github.com/JohnyBoy00/Grocery-List-Task-1", "_blank", "noopener noreferrer")}
                >
                    View Project
                </button>
            </div>
        </div>
    )
}

export default MainContent;