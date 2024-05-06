import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import TaskDetails from "./pages/TaskDetails";
import tasksJSON from "./data/tasks.json";
import { useState } from "react";

function App() {
  // States
  const [tasksList, setTaskList] = useState(tasksJSON);
  // State
  const [open, setOpen] = useState(false);

  // Events
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* PAGES */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasksList={tasksList}
              setTaskList={setTaskList}
              open={open}
              setOpen={setOpen}
              showDrawer={showDrawer}
              onClose={onClose}
            />
          }
        />
        <Route
          path="/task-details/:taskId"
          element={
            <TaskDetails
              tasksList={tasksList}
              setTaskList={setTaskList}
              open={open}
              setOpen={setOpen}
              showDrawer={showDrawer}
              onClose={onClose}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
