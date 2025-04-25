import React from "react";
import '../styles/main.css';

const Homepage = () => {
    return (
        <div className="container">
            <div className="ring_container">
                <img className="ring" src="..\public\ring.svg"></img>
                <div className="text_container">
                    <h2>Title</h2>
                    <p>Hello This is me</p>
                </div>
            </div>
            <img className="for" src="..\public\For.svg"></img>
            <img className="bak" src="..\public\Bak.svg" width={800}></img>
        </div>
    );
};

export default Homepage;