import axios from "axios";
import { JoinDataType } from "../types/auth";

const token = localStorage.getItem("AccessToken");

const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});

export const authApiService = {
  join: async (joinData: JoinDataType) => {
    try {
      const response = await authApi.post("/register", joinData);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("회원가입 에러:", error);
      throw error;
    }
  },
};
