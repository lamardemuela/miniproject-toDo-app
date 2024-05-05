import React, { useState } from "react";

function AddListItem() {
  // State
  const [nameValue, setNameValue] = useState("");
  const [descriptValue, setDescriptValue] = useState("");
  const [asignValue, setAsignValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [priorityValue, setPriorityValue] = useState("");

  // Events
  const handleNameChange = (event) => setNameValue(event.target.value);
  const handleDescriptChange = (event) => setDescriptValue(event.target.value);
  const handleAssignChange = (event) => setAsignValue(event.target.value);
  const handleStatusChange = (event) => setStatusValue(event.target.value);
  const handlePriorityChange = (event) => setPriorityValue(event.target.value);

  // Styles
  const formStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
    padding: "24px",
    margin: "0px 24px 24px 24px",
    backgroundColor: "white",
    borderRadius: "8px"
  }
  return (
    <form style={formStyles}>
      <label htmlFor="name"> Name </label>
      <input
        type="text"
        name="name"
        placeholder="Type the task name"
        value={nameValue}
        onChange={handleNameChange}
      />

      <label htmlFor="description"> Description </label>
      <input
        type="text"
        name="description"
        placeholder="Describe your task"
        value={descriptValue}
        onChange={handleDescriptChange}
      />

      <label htmlFor="assignee"> Assignee </label>
      <input
        type="text"
        name="assignee"
        placeholder="Assign this task to someone"
        value={asignValue}
        onChange={handleAssignChange}
      />

      <select
        name="status"
        id="status"
        value={statusValue}
        onChange={handleStatusChange}
      >
        <option value="To Do"> To Do </option>
        <option value="In progress"> In progress </option>
        <option value="Done"> Done </option>
      </select>

      <select
        name="priority"
        id="priority"
        value={priorityValue}
        onChange={handlePriorityChange}
      >
        <option value="Low"> Low </option>
        <option value="Medium"> Medium </option>
        <option value="High"> High </option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddListItem;
