import React from "react";

function TaskItem(props) {
  //destructuring
  const { title, description, assignee, priority, createdDate, dueDate } =
    props.eachTask;

  // Styles
  const itemStyles = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    gap: "16px",
    padding: "4px 12px 4px 12px",
    borderRadius: "8px",
  };
  return (
    <>
      <div style={itemStyles}>
        <p style={{ width: "200px" }}> {title} </p>
        <p style={{ width: "320px" }}> {description} </p>
        <p style={{ width: "150px" }}> {assignee} </p>
        <p style={{ width: "100px" }}> {priority} </p>
        <p style={{ width: "110px" }}> {createdDate} </p>
        <p style={{ width: "110px" }}> {dueDate} </p>
      </div>
    </>
  );
}

export default TaskItem;
