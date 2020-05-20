import React from "react";


function Sidebar(props) {
    return(
        <div className="sidebar_container">
        <div className="logo">
            <h1>CHECKCHECK</h1>
        </div>
        <div className="solidline"></div>
        <div className="solidline"></div>
        <div className="solidline"></div>

        <div className="todo">
            <a href="www.google.com" className="todo_buttons todo">
            To Do
            </a>
            <a href="www.google.com" className="todo_buttons grocery">
            Grocery List
            </a>
            <a href="www.google.com" className="todo_buttons application">
            Application
            </a>
            <a href="www.google.com" className="todo_buttons newlist">
            New List
            <i className="fas fa-plus"></i>
            </a>
        </div>

        <div className="username">
            <img src={props.userInformation.picture} className="profile_img" alt="profile" />
            
            <a href="www.google.com" className="username_link">
             {props.userInformation.name}
            </a>

        </div>
    </div>
    )
}


export default Sidebar;