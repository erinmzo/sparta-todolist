import * as Sentry from "@sentry/react";
import axios from "axios";

const todoApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const todoApiSevice = {
  getTodos: async () => {
    try {
      todoApi.get("/todos").then((response) => response.data);
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
    }
  },
  todoById: async (id: string) => {
    try {
      todoApi.get(`/todos/${id}`).then((response) => response.data);
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
    }
  },
};
