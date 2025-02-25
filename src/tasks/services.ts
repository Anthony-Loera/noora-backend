import { PrismaClient } from "@prisma/client";
import { v4 } from "uuid";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

export async function getOneTask(id: string) {
  return await prisma.task.findUnique({
    where: { id },
  });
}

export async function getAllTask() {
  return await prisma.task.findMany();
}

export async function createOneTask(
  name: string,
  color: string,
  completed: boolean
) {
  return await prisma.task.create({
    data: {
      id: v4(),
      name,
      color,
      completed,
    },
  });
}

export async function updatedTask(
  id: string,
  name: string,
  color: string,
  completed: boolean
) {
  return await prisma.task.update({
    where: { id },
    data: {
      name,
      color,
      completed,
    },
  });
}

export async function deletedTask(id: string) {
  return await prisma.task.delete({
    where: { id },
  });
}
