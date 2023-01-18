//constants
export enum loginOperations {
  SET_LOGIN_DATA = '/login/SET_LOGIN_DATA'
}

export type loginData = {
  username: string,
  id: number,
  email: string | null
}


//creators

export const setLoginData = (data: loginData) => ({
  type: loginOperations.SET_LOGIN_DATA,
  ...data,
})
