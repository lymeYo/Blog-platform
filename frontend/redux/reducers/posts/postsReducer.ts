import produce, { Draft } from 'immer'
import { actionInterface } from '../../../utils/constants'
import { store } from '../../store'
import { postsOperations } from './postsCreators'


export interface postCommentInterface {
  authorId: string
  id: string
  text: string
  publishTime: string
  rating: number
  isAnswer: boolean
  answeredCommentId: string
}

export interface postInterface {
  title: string
  text: string
  postId: string
  authorId: string
  rating: number
  comments: postCommentInterface[]
}

interface initialStateInterface {
  postsList: postInterface[],
  getPostById: (id: string) => postInterface,
}

let initialState: initialStateInterface = {
  postsList: [],

  getPostById: function(id: string) {
    return this.postsList.find((item) => item.postId == id)
  }
}


const postsReducer = produce((draft: Draft<initialStateInterface>, action: actionInterface) => {
  switch (action.type) {
    case postsOperations.SET_NEW_POST:
      draft.postsList.push(action.data)
      break

    case postsOperations.POST_RATING_RENDER:
      let curPost: any = draft.postsList.find(
        (post) => post.postId == action.postId
      )
      let postValue = action.isRatingUp ? 1 : -1
      curPost.rating += postValue
      
      break

    case postsOperations.COMMENT_RATING_RENDER:
      const curComment: any = draft.postsList.find((item) => item.postId == action.postId)?.comments.find((comment) => comment.id == action.commentId)
      let commentValue = action.isRatingUp ? 1 : -1
      curComment.rating += commentValue
      break

    case postsOperations.PUBLISH_NEW_COMMENT:
      draft.getPostById(action.postId).comments.push(action.data)
      break

    case postsOperations.DELETE_COMMENT:
      // !логика удаления комментария
      curPost = draft.postsList.find((item) => item.postId == action.postId)
      curPost.comments = curPost.comments.filter(comment => comment.id != action.commentId)

      break
  }

  return draft
}, initialState)


export default postsReducer