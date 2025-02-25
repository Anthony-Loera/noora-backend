import { Request, Response } from "express";
import {
  createOneTask,
  deletedTask,
  getAllTask,
  getOneTask,
  updatedTask,
} from "./services";

export async function getTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const task = await getOneTask(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to get task" });
  }
}

export async function tasks(req: Request, res: Response) {
  try {
    const results = await getAllTask();
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
}

export async function newTask(req: Request, res: Response) {
  try {
    const { name, color, completed } = req.body;
    const created = await createOneTask(name, color, completed);
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const { id, name, color, completed } = req.body;
    const updatedTaskResults = await updatedTask(id, name, color, completed);
    res.status(200).json(updatedTaskResults);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const { id } = req.body;
    const deleteTaskResults = await deletedTask(id);
    res.status(200).json(deleteTaskResults);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
}
