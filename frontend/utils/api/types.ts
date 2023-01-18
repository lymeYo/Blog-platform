export type TLoginData = {
  username: string
  password: string
}

export type TRegisterData = {
  username: string
  password: string
  email?: string
}

export type TAuthResData = {
  username: string
  id: number
  access_token: string
  email: string | null
}