import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiLink from "../config/API";

const TaskDetails = () => {
  const [text, SetText] = useState();
  const { id } = useParams();
  console.log(id);

  const GetTaskDetails = async () => {
    try {
      let res = await ApiLink.get(`/task/tasks/${id}`);
      console.log(res.data);
      SetText(res.data);
    } catch (error) {
      console.log("Error Getting Task", error);
    }
  };

  const CreateTaskStatus = async () => {
    let status = {
      text: "Task created",
      task: id,
    };
    try {
      let res = await ApiLink.post("/status", status);
      console.log(res.data);
    } catch (error) {
      console.log("Error Creating Task", error);
    }
  };

  useEffect(() => {
    GetTaskDetails();
  }, []);

  return (
    <div>
      <button type="button" onClick={CreateTaskStatus}>
        Add status
      </button>
    </div>
  );
};

export default TaskDetails;
