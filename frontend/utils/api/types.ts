export type TloginData = {
  username: string
  password: string
}

export type TregisterData = {
  username: string
  password: string
  email?: string
}

export type TauthResData = {
  username: string
  id: number
  access_token: string
  email?: string | null
}

type TuserRelation = {
  id: number
  username: string
  email?: string | null
}

export type TpostResult = {
  id: number
  userId: number
  title: string
  body: string
  rating: number
  views: number
  createdAt: string
  updatedAt: string
  user?: TuserRelation
  comments: TcommentResult[]
}

export type TpostRequest = {
  title: string
  body: string
  rating: number
}

export type TcommentResult = {
  id: number
  text: string
  rating: number
  createdAt: string
  updatedAt: string
  user?: TuserRelation
}

export type TcommentRequest = {
  text: string
  rating: number
  postId: number
}
