import { AxiosInstance } from 'axios'

import {
  TcommentRequest,
  TcommentResult,
  TpostRequest,
  TpostResult,
} from './types'

export const CommentApi = (instance: AxiosInstance) => ({
  async create(commentData: TcommentRequest): Promise<TcommentResult> {
    const { data } = await instance.post<
      TcommentRequest,
      { data: TcommentResult }
    >('/comment', commentData)
    return data
  },

  async update(
    commentData: Partial<TcommentRequest>,
    id: number
  ): Promise<TcommentResult> {
    const { data } = await instance.patch<
      Partial<TcommentRequest>,
      { data: TcommentResult }
    >(`/comment/${id}`, commentData)
    return data
  },

  async updateStatistics(
    commentData: Partial<TcommentRequest>,
    id: number
  ): Promise<TcommentResult> {
    const { data } = await instance.patch<
      Partial<TcommentRequest>,
      { data: TcommentResult }
    >(`/comment/statistics/${id}`, commentData)
    return data
  },
})
