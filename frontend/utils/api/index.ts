import axios from "axios"
import { GetServerSidePropsContext, NextPageContext } from "next"
import Cookies, { parseCookies } from "nookies"
import { PostApi } from "./post"
import { TauthResData, TloginData, TregisterData } from "./types"
import { UserAPI } from "./user"
import {CommentApi} from "./comment";


type ApiReturnType = {
  user: ReturnType<typeof UserAPI>
  post: ReturnType<typeof PostApi>
  comment: ReturnType<typeof CommentApi>
}

export const MyApi = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies() //!у арчакова иное написание
  const token = cookies.token

  const instance = axios.create({
    baseURL: "http://localhost:7777/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return {
    user: UserAPI(instance),
    post: PostApi(instance),
    comment: CommentApi(instance),
  }
}