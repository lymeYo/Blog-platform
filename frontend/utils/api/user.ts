import { AxiosInstance } from 'axios'

import { TauthResData, TloginData, TregisterData } from './types'

export const UserAPI = (instance: AxiosInstance) => ({
  async registration(dto: TregisterData): Promise<TauthResData> {
    const { data } = await instance.post<TregisterData, { data: TauthResData }>(
      '/auth/register',
      dto
    )
    return data
  },

  async login(dto: TloginData): Promise<TauthResData> {
    const { data } = await instance.post<TregisterData, { data: TauthResData }>(
      '/auth/login',
      dto
    )
    return data
  },

  async getProfile(): Promise<TauthResData> {
    const { data } = await instance.get<TauthResData>('/user/me')
    return data
  },
})
