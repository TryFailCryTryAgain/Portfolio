import Header from "../common/header";
import { useTranslation } from "react-i18next";

const Right_Pannel_Workpage = () => {
    const { t } = useTranslation();

    return (
        <div className="right-panel">
            <Header />

            <div className="showcase-container">
                <div className="showcase-header">
                    <h2>{t('workpage_title')}</h2>
                </div>
                
                {/* If a filter system wants to be used, the styling "active" is in place */}
                <div className="work-filter-controls">
                    <button className="filter-btn">Web Applications</button>
                    <button className="filter-btn">UI/UX Design</button>
                    <button className="filter-btn">Mobile Apps</button>
                    <button className="filter-btn">Api</button>
                    <button className="filter-btn">AI</button>
                </div>
                
                <div className="project-grid">
                    <div className="project-card">
                        <div className="project-image"></div> {/* style="background-image: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');" */}
                        <div className="project-details">
                            <h3 className="project-title">Chatroom Platform</h3>
                            <p className="project-description">
                                A simplistic communication platform that supports direct and group messages between the users.
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
                                {/* <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i>Live Demo</a> */}
                                <a href="#" className="project-link"><i className="fab fa-github"></i>Application <i>* Coming Soon</i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-image"></div> {/* style="background-image: url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');" */}
                        <div className="project-details">
                            <h3 className="project-title">Local AI ChatRoom</h3>
                            <p className="project-description">
                                A simplistic chatroom where you can have your local AI chatbot to help you out, without the need of an internet connection.
                            </p>
                            <p className="project-description">
                                Built with Ollama and Typescript. Impliments a simple frontend & backend that keeps track of your chat history, so you can always go back to see what you have asked earlier.
                            </p>
                            <div className="project-tags">
                                <span className="tag">Ollama</span>
                                <span className="tag">TypeScript</span>
                                <span className="tag">AI</span>
                                <span className="tag">MariaDB</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link"><i className="fab fa-github"></i>Source Code <i>* Coming Soon</i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-image"></div> {/* style="background-image: url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');" */}
                        <div className="project-details">
                            <h3 className="project-title">BookStore</h3>
                            <p className="project-description">
                                Simulaste a BookStore and all a user would want and need from it. All from Auth (login, logout), too browsing and ordering books.
                            </p>
                            <p className="project-description">
                                It is a frontend client that is connected to an earlier deloyed Book API that I built.
                            </p>
                            <div className="project-tags">
                                <span className="tag">Angular</span>
                                <span className="tag">Typescript</span>
                                <span className="tag">SCSS</span>
                                <span className="tag">i18next</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link"><i className="fab fa-github"></i>Source Code <i>* Coming Soon</i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-image"></div> {/* style="background-image: url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');" */}
                        <div className="project-details">
                            <h3 className="project-title">BookStore API</h3>
                            <p className="project-description">
                                A Bookstore API that contains all the crud functions one would need for a functioning bookstore.
                            </p>
                            <p className="project-description">
                                A simplistic RESTful API that is built with typescript and has a connection MongoDB (noSQL) to store its data.
                            </p>
                            <div className="project-tags">
                                <span className="tag">TypeScript</span>
                                <span className="tag">MongoDB</span>
                                <span className="tag">RESTful</span>
                                <span className="tag">NoSQL</span>
                                <span className="tag">cURL</span>
                                <span className="tag">Insomnia</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link"><i className="fab fa-github"></i>Source Code <i>* Coming Soon</i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-image"></div> {/* style="background-image: url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');" */}
                        <div className="project-details">
                            <h3 className="project-title">IMDB Clone</h3>
                            <p className="project-description">
                                A project that mimics the IMDB website in storing a vast amount of different movies, genres and actors.
                            </p>
                            <p className="project-description">
                                This project has built with PHP, Laravel/Herd and uses a MariaDB as the database.
                            </p>
                            <div className="project-tags">
                                <span className="tag">PHP</span>
                                <span className="tag">Laravel</span>
                                <span className="tag">Herd</span>
                                <span className="tag">MariaDB</span>
                                <span className="tag">SQL</span>
                                <span className="tag">SCSS</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link"><i className="fab fa-github"></i>Source Code <i>* Coming Soon</i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-image"></div> {/* style="background-image: url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');" */}
                        <div className="project-details">
                            <h3 className="project-title">Laravel API AI</h3>
                            <p className="project-description">
                                A smaller project that creates a light version of a quick API that sends a retrives messages from a local AI Chatbot.
                            </p>
                            <p className="project-description">
                                This API is built within Laravel, and uses a MariaDB to store each request and response, with its session_id, and timestamp.
                            </p>
                            <div className="project-tags">
                                <span className="tag">PHP</span>
                                <span className="tag">MariaDB</span>
                                <span className="tag">SQL</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link"><i className="fab fa-github"></i>Source Code <i>* Coming Soon</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right_Pannel_Workpage;