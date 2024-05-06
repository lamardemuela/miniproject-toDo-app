import { Drawer } from "antd";
import React from "react";
import { useState } from "react";

function EditTask(props) {
  // States
  const [nameValue, setNameValue] = useState(props.nameValue);
  const [descriptValue, setDescriptValue] = useState(props.descriptValue);
  const [asignValue, setAsignValue] = useState(props.asignValue);
  const [statusValue, setStatusValue] = useState(props.statusValue);
  const [priorityValue, setPriorityValue] = useState(props.priorityValue);
  const [dueDateValue, setDueDateValue] = useState(props.dueDateValue);

  // Events
  const handleNameChange = (event) => setNameValue(event.target.value);
  const handleDescriptChange = (event) => setDescriptValue(event.target.value);
  const handleAssignChange = (event) => setAsignValue(event.target.value);
  const handleStatusChange = (event) => setStatusValue(event.target.value);
  const handlePriorityChange = (event) => setPriorityValue(event.target.value);
  const handleDueDateChange = (event) => setDueDateValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault()

    props.setTaskList((currentState) => {
        const clone = JSON.parse(JSON.stringify(currentState));
        clone.forEach((eachTask) => {
            if(eachTask.id === props.foundTask.id) {
                eachTask.title = nameValue
                eachTask.description = descriptValue
                eachTask.assignee = asignValue
                eachTask.status = statusValue
                eachTask.priority = priorityValue
                eachTask.dueDate = dueDateValue
            }
        })
        return clone
    })
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
    <div>
      <Drawer
        className="drawer"
        title="Edit task"
        onClose={props.onClose}
        open={props.open}
      >
        <form onSubmit={handleSubmit} style={formStyles}>
          <div style={formDivsStyles}>
            <label htmlFor="name"> Name </label>
            <input
              style={inputsStyles}
              type="text"
              name="name"
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
              <option value="Low"> Low </option>
              <option value="Medium"> Medium </option>
              <option value="High"> High </option>
            </select>
          </div>
          <div style={formDivsStyles}>
            <label htmlFor="due date"> Due Date </label>
            <input
              type="date"
              value={dueDateValue}
              style={inputsStyles}
              onChange={handleDueDateChange}
            />
          </div>
          <button className="primary-btn" type="submit">Guardar cambios</button>
        </form>
      </Drawer>
    </div>
  );
}

export default EditTask;
