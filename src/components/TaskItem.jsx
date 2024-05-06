import React, { useState } from "react";
import imgDelete from "../assets/images/borrar.png";
import { Link } from "react-router-dom";

function TaskItem(props) {
  //destructuring
  const { id, title, description, assignee, priority, status, dueDate } =
    props.eachTask;
  // States
  const [checkValue, setCheckValue] = useState(false);

  // Events
  const handleCheckValue = () => setCheckValue(!checkValue);

  // Styles
  const itemStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    gap: "16px",
    padding: "4px 12px 4px 12px",
    borderRadius: "8px",
  };



  return (
    <>
      <div style={itemStyles}>
        <input
          name="done"
          type="checkbox"
          checked={checkValue}
          onChange={handleCheckValue}
          style={{ width: "60px" }}
        />
        <Link to={`/task-details/${id}`} style={{color:"#34B5D9" }}>
          <p style={{ width: "200px" }}> {title} </p>
        </Link>
        <p style={{ width: "320px" }}> {description} </p>
        <p style={{ width: "150px" }}> {assignee} </p>
        <p style={{ width: "100px" }}> {priority} </p>
        <p style={{ width: "110px" }}> {status} </p>
        <p style={{ width: "110px" }}> {dueDate} </p>
        <div style={{ width: "80px" }}>
          <img src={imgDelete} alt="delete task" width="32px" />
        </div>
      </div>
    </>
  );
}

export default TaskItem;
