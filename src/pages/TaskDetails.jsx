import React from "react";
import { useParams } from "react-router-dom";
import { Button, Drawer } from "antd";
import EditTask from "../components/EditTask";
import { useState } from "react";

function TaskDetails(props) {
  // use params
  const paramsDinamicos = useParams();
  const foundTask = props.tasksList.find((eachTask) => {
    return eachTask.id === paramsDinamicos.taskId;
  });

  // Styles
  const divContainerDetails = {
    display: "fex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "48px",
    margin: "32px",
    backgroundColor: "white",
    borderRadius: "16px",
  };

  const containerDivsChilds = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  };

  return (
    <div style={divContainerDetails}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2> Task: {foundTask.title}</h2>
        <Button className="primary-btn" onClick={props.showDrawer}>
          {" "}
          ✏️ Edit task{" "}
        </Button>
        {props.open === true && (
          <EditTask
            nameValue={foundTask.title}
            descriptValue={foundTask.description}
            asignValue={foundTask.assignee}
            statusValue={foundTask.status}
            priorityValue={foundTask.priority}
            dueDateValue={foundTask.dueDate}

            open={props.open}
            onClose={props.onClose}
            setOpen={props.setOpen}
            setTaskList={props.setTaskList}
            foundTask = {foundTask}
          />
        )}
      </div>
      <div style={containerDivsChilds}>
        <h3 style={{ marginBottom: "-8px" }}>Id</h3>
        <p> {foundTask.id} </p>
      </div>
      <div style={containerDivsChilds}>
        <h3 style={{ marginBottom: "-8px" }}>Description</h3>
        <p> {foundTask.description} </p>
      </div>

      <div style={containerDivsChilds}>
        <h3 style={{ marginBottom: "-8px" }}>Assignee</h3>
        <p> {foundTask.assignee} </p>
      </div>
      <div style={containerDivsChilds}>
        <h3 style={{ marginBottom: "-8px" }}>Status</h3>
        <p> {foundTask.status} </p>
      </div>

      <div>
        <div style={containerDivsChilds}>
          <h3 style={{ marginBottom: "-8px" }}>Priority</h3>
          <p> {foundTask.priority} </p>
        </div>
      </div>
      <div style={containerDivsChilds}>
        <h3 style={{ marginBottom: "-8px" }}>Created at</h3>
        <p> {foundTask.createdDate} </p>
      </div>
      <div style={containerDivsChilds}>
        <h3 style={{ marginBottom: "-8px" }}>Due Date</h3>
        <p> {foundTask.dueDate} </p>
      </div>
    </div>
  );
}

export default TaskDetails;
