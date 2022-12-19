//constants

import { postCommentInterface, postInterface } from "./postsReducer";

export enum postsOperations {
  SET_NEW_POST = "posts/SET_NEW_POST",
  POST_RATING_RENDER = "posts/POST_RATING_RENDER",
  COMMENT_RATING_RENDER = "posts/COMMENT_RATING_RENDER",
  PUBLISH_NEW_COMMENT = "posts/PUBLISH_NEW_COMMENT",
  DELETE_COMMENT = "posts/DELETE_COMMENT",
}

// export interface dataNewPostTraport {
//   title: string,
//   text: string,
// }

//creators

export const setNewPost = (data: postInterface) => ({
  type: postsOperations.SET_NEW_POST,
  data,
})

export const postRatingRender = (isRatingUp: boolean, postId: string) => ({
  type: postsOperations.POST_RATING_RENDER,
  isRatingUp,
  postId,
})
export const commentRatingRender = (isRatingUp: boolean, commentId: string, postId: string) => ({
  type: postsOperations.COMMENT_RATING_RENDER,
  isRatingUp,
  commentId,
  postId,
})

export const publishComment = (data: postCommentInterface, postId: string) => ({
  type: postsOperations.PUBLISH_NEW_COMMENT,
  data,
  postId
})

export const deleteComment = (postId: string, commentId: string) => ({
  type: postsOperations.DELETE_COMMENT,
  commentId,
  postId,
})