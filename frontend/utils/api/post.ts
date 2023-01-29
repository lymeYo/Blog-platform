import { AxiosInstance } from 'axios'

import { TpostRequest, TpostResult } from './types'

export const PostApi = (instance: AxiosInstance) => ({
  async getAll(): Promise<TpostResult[]> {
    const { data } = await instance.get<TpostResult[]>('/post')
    return data
  },

  async create(postData: TpostRequest): Promise<TpostResult> {
    const { data } = await instance.post<TpostRequest, { data: TpostResult }>(
      '/post',
      postData
    )
    return data
  },

  async update(postData: TpostRequest, id: string): Promise<TpostResult> {
    const { data } = await instance.patch<TpostRequest, { data: TpostResult }>(
      `/post/${id}`,
      postData
    )
    console.log('patch data', data)
    return data
  },

  async updateStatistics(
    postData: TpostRequest,
    id: string
  ): Promise<TpostResult> {
    const { data } = await instance.patch<TpostRequest, { data: TpostResult }>(
      `/post/statistics/${id}`,
      postData
    )
    console.log('patch data', data)
    return data
  },

  async getPostById(id: string): Promise<TpostResult> {
    const { data } = await instance.get<TpostResult>(`/post/${id}`)
    return data
  },
})
