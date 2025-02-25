import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { deleteTask, newTask, tasks, updateTask } from "./tasks/controllers";

const app = express();
const port = 3000;

app.use(cors({ credentials: true, origin: "http://localhost:3001" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/tasks", tasks);
app.post(`/tasks`, newTask);
app.put(`/tasks/:id`, updateTask);
app.delete(`/tasks/:id`, deleteTask);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
