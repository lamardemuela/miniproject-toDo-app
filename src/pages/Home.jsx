import React from "react";
import TasksList from "../components/TasksList";

function Home(props) {
  return (
    <>
      <TasksList
        tasksList={props.tasksList}
        setTaskList={props.setTaskList}
        open={props.open}
        showDrawer={props.showDrawer}
        onClose={props.onClose}
      />
    </>
  );
}

export default Home;
