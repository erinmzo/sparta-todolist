import * as Sentry from "@sentry/react";
import axios from "axios";

const todoApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const todoApiService = {
  getTodos: async () => {
    try {
      const response = await todoApi.get("/todos");
      return response.data;
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
    }
  },
  todoById: async (id: string) => {
    try {
      const response = await todoApi.get(`/todos/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
    }
  },
};
