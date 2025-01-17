import * as Sentry from "@sentry/react";
import axios from "axios";
import { JoinDataType, LoginDataType } from "../types/auth";

const token = localStorage.getItem("AccessToken");

const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApiService = {
  join: async (joinData: JoinDataType) => {
    try {
      const { data } = await authApi.post("/register", joinData);
      return data;
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
    }
  },
  login: async (loginData: LoginDataType) => {
    try {
      const { data } = await authApi.post("/login", loginData);
      return data;
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
    }
  },
  getUser: async () => {
    try {
      const { data } = await authApi.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
    }
  },
  updateProfile: async (avatar: string, nickname: string) => {
    try {
      const { data } = await authApi.patch(
        "/profile",
        { avatar, nickname },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
    }
  },
};
