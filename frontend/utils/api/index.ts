import axios from "axios";
import { TAuthResData, TLoginData, TRegisterData } from "./types"

const instance = axios.create({
  baseURL: "http://localhost:7777/",
})

export const UserAPI = {
  async registration(dto: TRegisterData): Promise<TAuthResData> {
    const { data } = await instance.post("/auth/register", dto)
    return data
  },

  async login(dto: TLoginData): Promise<TAuthResData> {
    const { data } = await instance.post("/auth/login", dto)
    return data
  },
}