import React, { useState } from "react";
import tasksJSON from "../data/tasks.json";
import TaskItem from "./TaskItem";
import { Link, Route, Routes } from "react-router-dom";
import AddListItem from "./AddListItem";

function TasksList() {
  // State
  const [tasksList, setTaskList] = useState(tasksJSON);
  const [isFormShowing, setIsFormShowing] = useState(false)

  // Events
  const handleShowForm = () => setIsFormShowing(!isFormShowing)

  // Styles
  const containerListStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    margin: "16px 24px 24px 24px",
  };

  const headTableStyles = {
    display: "flex",
    gap: "16px",
    justifyContent: "flex-start",
    margin: "8px 24px -20px 24px",
    padding: "4px 12px 0px 12px",
    color: "#424659",
    fontWeight: "bold",
  };

  const pageHeaderStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    margin: "0px 24px 24px 24px",
    // borderBottom: "1px solid #e1e5f7",
  };
  return (
    <>
      {/* PAGE HEADER */}
      <div style={pageHeaderStyles}>
        <h1>Tasks list</h1>
        <button onClick={handleShowForm}> + Add Task </button>
      </div>

      {/* ADD FORM */}
      {isFormShowing === true &&
      <AddListItem/>
      }

      {/* HEAD TABLE */}
      <div style={headTableStyles}>
        <p style={{ width: "200px" }}> Title </p>
        <p style={{ width: "320px" }}> Description </p>
        <p style={{ width: "150px" }}> Assignee </p>
        <p style={{ width: "120px" }}> Priority </p>
        <p style={{ width: "110px" }}> Created at </p>
        <p style={{ width: "110px" }}> Due date </p>
      </div>

      {/* LIST ITEM */}
      <div style={containerListStyles}>
        {tasksList.map((eachTask) => {
          return <TaskItem eachTask={eachTask} key={eachTask.id} />;
        })}
      </div>
    </>
  );
}

export default TasksList;
