import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/header";

const Right_Pannel_Workpage = () => {
    return (
        <div className="right-panel">
            <Header />

            <div className="showcase-container">
                <div className="showcase-header">
                    <h2>Selected Projects</h2>
                    <p>Filter by category to see specific types of work</p>
                </div>
                
                <div className="work-filter-controls">
                    <button className="filter-btn active">All</button>
                    <button className="filter-btn">Web Development</button>
                    <button className="filter-btn">UI/UX Design</button>
                    <button className="filter-btn">Mobile Apps</button>
                    <button className="filter-btn">Open Source</button>
                </div>
                
                <div className="project-grid">
                    <div className="project-card">
                        <div className="project-image"></div> {/* style="background-image: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');" */}
                        <div className="project-details">
                            <h3 className="project-title">Chatroom Platform</h3>
                            <p className="project-description">
                                A simplistic communication platform that supports direct and group discords between the users.
                            </p>
                            <p className="project-description">
                                This project has been built thru my origanisation Static Lain which I am a co-founder of.
                            </p>
                            <div className="project-tags">
                                <span className="tag">React</span>
                                <span className="tag">Node.js</span>
                                <span className="tag">Firebase</span>
                                <span className="tag">Typescript</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i>Live Demo</a>
                                <a href="#" className="project-link"><i className="fab fa-github"></i>Application</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-image"></div> {/* style="background-image: url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');" */}
                        <div className="project-details">
                            <h3 className="project-title">Task Management App</h3>
                            <p className="project-description">
                                Productivity application with real-time collaboration, task tracking, and team management.
                            </p>
                            <div className="project-tags">
                                <span className="tag">Vue.js</span>
                                <span className="tag">Firebase</span>
                                <span className="tag">PWA</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i> Live Demo</a>
                                <a href="#" className="project-link"><i className="fab fa-github"></i> Source Code</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-image"></div> {/* style="background-image: url('https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');" */}
                        <div className="project-details">
                            <h3 className="project-title">Health & Fitness Mobile App</h3>
                            <p className="project-description">
                                Cross-platform mobile application for workout tracking, nutrition planning, and progress analytics.
                            </p>
                            <div className="project-tags">
                                <span className="tag">React Native</span>
                                <span className="tag">GraphQL</span>
                                <span className="tag">AWS</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link"><i className="fab fa-app-store"></i> App Store</a>
                                <a href="#" className="project-link"><i className="fab fa-google-play"></i> Play Store</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-image"></div> {/* style="background-image: url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');" */}
                        <div className="project-details">
                            <h3 className="project-title">Design System</h3>
                            <p className="project-description">
                                Comprehensive design system with reusable components, style guides, and documentation.
                            </p>
                            <div className="project-tags">
                                <span className="tag">Figma</span>
                                <span className="tag">Storybook</span>
                                <span className="tag">CSS</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i> View Prototype</a>
                                <a href="#" className="project-link"><i className="fas fa-book"></i> Documentation</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-image" ></div> {/* style="background-image: url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');" */}
                        <div className="project-details">
                            <h3 className="project-title">Developer Blog Platform</h3>
                            <p className="project-description">
                                Technical blogging platform with code syntax highlighting, markdown support, and community features.
                            </p>
                            <div className="project-tags">
                                <span className="tag">Next.js</span>
                                <span className="tag">TypeScript</span>
                                <span className="tag">PostgreSQL</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i> Visit Site</a>
                                <a href="#" className="project-link"><i className="fab fa-github"></i> Source Code</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-image"></div> {/* style="background-image: url('https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');" */}
                        <div className="project-details">
                            <h3 className="project-title">Open Source Library</h3>
                            <p className="project-description">
                                Utility library for data visualization with React. Used by thousands of developers worldwide.
                            </p>
                            <div className="project-tags">
                                <span className="tag">Open Source</span>
                                <span className="tag">React</span>
                                <span className="tag">D3.js</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i> Documentation</a>
                                <a href="#" className="project-link"><i className="fab fa-github"></i> GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right_Pannel_Workpage;