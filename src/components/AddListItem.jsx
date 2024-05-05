import React, { useState } from "react";
import { Button, Drawer } from "antd";
console.log(Button)
function AddListItem(props) {
  // State
  const [nameValue, setNameValue] = useState("");
  const [descriptValue, setDescriptValue] = useState("");
  const [asignValue, setAsignValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [priorityValue, setPriorityValue] = useState("");
  const [dueDateValue, setDueDateValue] = useState("");
  // Events
  const handleNameChange = (event) => setNameValue(event.target.value);
  const handleDescriptChange = (event) => setDescriptValue(event.target.value);
  const handleAssignChange = (event) => setAsignValue(event.target.value);
  const handleStatusChange = (event) => setStatusValue(event.target.value);
  const handlePriorityChange = (event) => setPriorityValue(event.target.value);
  const handleDueDateChange = (event) => setDueDateValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault()

    // recopilamos la info del form
    const newTask = {
      title: nameValue,
      description: descriptValue,
      assignee: asignValue,
      status: statusValue,
      priority: priorityValue,
      dueDate: dueDateValue
    }

    // añadimos el nuevo item a la lista
    props.setTaskList([ ...props.tasksList, newTask ])

  } 

  // Styles
  const formStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: "24px",
    margin: "0px 24px 24px 24px",
    backgroundColor: "white",
    borderRadius: "8px",
  };

  const formDivsStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  };

  const inputsStyles = {
    height: "32px",
    border: "1px solid #6D7A72",
    borderRadius: "4px",
    padding: "0px 8px 0px 8px",
  };
  return (
    <>
      <Drawer
        style={{ fontFamily: "'Poppins', sans-serif", color: "#222" }}
        title="Add a new task"
        onClose={props.onClose}
        open={props.open}
      >
        <form  onSubmit={ handleSubmit }style={formStyles}>
          <div style={formDivsStyles}>
            <label htmlFor="name"> Name </label>
            <input
              style={inputsStyles}
              type="text"
              name="name"
              placeholder="Type the task name"
              value={nameValue}
              onChange={handleNameChange}
            />
          </div>
          <div style={formDivsStyles}>
            <label htmlFor="description"> Description </label>
            <input
              style={inputsStyles}
              type="text"
              name="description"
              placeholder="Describe your task"
              value={descriptValue}
              onChange={handleDescriptChange}
            />
          </div>

          <div style={formDivsStyles}>
            <label htmlFor="assignee"> Assignee </label>
            <input
              style={inputsStyles}
              type="text"
              name="assignee"
              placeholder="Assign this task to someone"
              value={asignValue}
              onChange={handleAssignChange}
            />
          </div>

          <div style={formDivsStyles}>
            <select
              style={inputsStyles}
              name="status"
              id="status"
              value={statusValue}
              onChange={handleStatusChange}
            >
              <option value="select"> Select a status </option>
              <option value="To Do"> To Do </option>
              <option value="In progress"> In progress </option>
              <option value="Done"> Done </option>
            </select>
          </div>

          <div style={formDivsStyles}>
            <select
              style={inputsStyles}
              name="priority"
              id="priority"
              value={priorityValue}
              onChange={handlePriorityChange}
            >
              <option value="select"> Select a priority </option>
              <option value="Low"> Low </option>
              <option value="Medium"> Medium </option>
              <option value="High"> High </option>
            </select>
          </div>
          <div style={formDivsStyles}>
          <label htmlFor="due date"> Due Date </label>
            <input type="date" value={dueDateValue} style={inputsStyles} onChange={handleDueDateChange} />
          </div>

          {/* <Button className="primary-btn" type="submit">
            Add task
          </Button> */}
          <button type="submit">Add Task</button>
        </form>
      </Drawer>
    </>
  );
}

export default AddListItem;
