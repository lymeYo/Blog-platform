import produce, { Draft } from 'immer'
import { actionInterface } from '../../../utils/constants'
import { loginOperations } from './loginCreators'


interface initialStateInterface {
  isAuth: boolean
  name: string
  avatarSrc: string
  id: number | null
  email: string | null
}

let initialState: initialStateInterface = {
  isAuth: false,
  name: '',
  avatarSrc: '',
  id: null,
  email: null
}


const loginReducer = produce((draft: Draft<initialStateInterface>, action: actionInterface) => {
  switch (action.type) {
    case loginOperations.SET_LOGIN_DATA:
      console.log(action);
      
      draft.isAuth = true
      draft.name = action.username
      draft.id = action.id
      draft.email = action.email
  }

  return draft
}, initialState)


export default loginReducer