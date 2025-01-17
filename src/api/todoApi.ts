import axios from "axios";

const todoApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const todoApiSevice = {
  getTodos: () => todoApi.get("/todos").then((response) => response.data),
  todoById: (id: string) => todoApi.get(`/todos/${id}`).then((response) => response.data),
};
