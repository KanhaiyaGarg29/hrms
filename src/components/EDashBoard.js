import React from "react";
import "./EDashBoard.css";
import { useSelector } from "react-redux";
import Etask from "./EdashBoard/Etask";
import ELeave from "./EdashBoard/ELeave";
import Calender from "./EdashBoard/Calender";

function EDashBoard() {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="emaindiv">
      <div className="username">
        <div>
          <span className="profile">{user.name[0]}</span>
        </div>
        <div className="firstname">
          <p className="Firstclass">Hello <span className="person-name">{user.name}</span></p>
          <p className="cat-name">Category: {user.category}</p>
        </div>
      </div>

      <div className="dash-wrapper">
        <div className="charts">
          <Etask />
          <ELeave />
        </div>
        <div className="noti">
          <strong>Notifications</strong>

          <ol class="alternating-colors">
            <li>
              <strong>New Task Assigned:</strong>
              <p>You have been assigned a new task: Complete the Q2 Sales Report. Deadline: June 30th.</p>
            </li>
            <li>
              <strong>Performance Review Reminder:</strong>
              <p>Reminder: Your annual performance review is scheduled for June 25th at 2 PM. Please prepare your self-assessment.</p>
            </li>
            <li>
              <strong>Meeting Invitation:</strong>
              <p>You have a meeting with the Marketing Team on May 24th at 10 AM in Conference Room B.</p>
            </li>
            <li>
              <strong>Time-off Approval:</strong>
              <p>Your request for time off from June 10th to June 14th has been approved. Enjoy your vacation!</p>
            </li>
            
          </ol>
        </div>
        <div className="calender">
          <Calender />
        </div>
      </div>
    </div>
  );
}

export default EDashBoard;
