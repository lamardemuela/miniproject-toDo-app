import React, { useState } from "react";
import TaskItem from "./TaskItem";
import AddListItem from "./AddListItem";
import { Button } from "antd";

function TasksList(props) {
  

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
    margin: "16px 24px -20px 24px",
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
        <Button className="primary-btn" type="primary" onClick={props.showDrawer}>
          + Add task
        </Button>
      </div>

      {/* ADD FORM */}
      {props.open === true && (
        <AddListItem
          open={props.open}
          onClose={props.onClose}
          tasksList={props.tasksList}
          setTaskList={props.setTaskList}
        />
      )}

      {/* HEAD TABLE */}
      <div style={headTableStyles}>
        <p style={{ width: "60px" }}> Done </p>
        <p style={{ width: "210px" }}> Title </p>
        <p style={{ width: "335px" }}> Description </p>
        <p style={{ width: "150px" }}> Assignee </p>
        <p style={{ width: "120px" }}> Priority </p>
        <p style={{ width: "120px" }}> Status </p>
        <p style={{ width: "110px" }}> Due date </p>
        <p style={{ width: "80px" }}> Actions </p>
      </div>

      {/* LIST ITEM */}
      <div style={containerListStyles}>
        {props.tasksList.map((eachTask) => {
          return <TaskItem eachTask={eachTask} key={eachTask.id} />;
        })}
      </div>
    </>
  );
}

export default TasksList;
