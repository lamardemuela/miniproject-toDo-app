import React, { useState } from 'react'
import tasksJSON from "../data/tasks.json"
import TaskItem from './TaskItem'

function TasksList() {
    // State
    const [tasksList, setTaskList] = useState(tasksJSON)

    // Styles
    const containerListStyles = {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        margin: "16px 12px 24px 12px"
    }
  return (
    <div style={containerListStyles}>
        {tasksList.map((eachTask) => {
            return(
                <TaskItem eachTask = {eachTask} key={eachTask.id}/>
            )
        })}
    </div>
  )
}

export default TasksList