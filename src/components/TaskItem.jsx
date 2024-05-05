import React, { useState } from "react";
import imgDelete from "../assets/images/borrar.png"

function TaskItem(props) {
  //destructuring
  const { title, description, assignee, priority, status, dueDate } =
    props.eachTask;

  // States
  const [checkValue, setCheckValue] = useState(false)

  // Events
  const handleCheckValue = () => setCheckValue(!checkValue)
  
  
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

  // Condiciones para el Status
  if (status === "Done") {
    itemStyles.backgroundColor= "#78CF99"
  } else if (status === "In Progress"){
    itemStyles.backgroundColor= "#A7C7E1"
  } 

  return (
    <>
      <div style={itemStyles}>
        <input name= "done" type="checkbox" checked= {checkValue} onChange={handleCheckValue} style={{width:"60px"}}/>
        <p style={{ width: "200px" }}> {title} </p>
        <p style={{ width: "320px" }}> {description} </p>
        <p style={{ width: "150px" }}> {assignee} </p>
        <p style={{ width: "100px" }}> {priority} </p>
        <p style={{ width: "110px" }}> {status} </p>
        <p style={{ width: "110px" }}> {dueDate} </p>
        <div style={{ width: "80px" }}>
        <img  src={imgDelete} alt="delete tas" width="32px"/>
        </div>
        
      </div>
    </>
  );
}

export default TaskItem;
