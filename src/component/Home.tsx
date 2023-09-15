import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { Task, addTask, deleteTask, editTask } from "../reducer";

export const Home: React.FC = () => {
  const tasks = useSelector<RootState, Task[]>((state) => state.list);
  const dispatch: AppDispatch = useDispatch();

  const handleAddTask = () => {
    const newTask: Task = {
      id: Math.random(),
      name: "New Task",
      description: "",
      date: new Date(),
    };
    dispatch(addTask(newTask));
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditTask = (updatedTask: Task) => {
    dispatch(editTask(updatedTask));
  };
  return (
    <div style={{ margin: 10 }}>
      <button
        onClick={handleAddTask}
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
          padding: "20px",
          fontSize: 20,
        }}
      >
        Add Task
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <button
              onClick={() => handleEditTask({ ...task, name: "Updated Task" })}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
