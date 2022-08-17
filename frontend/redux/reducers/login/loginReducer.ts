import produce, { Draft } from 'immer'
import { actionInterface } from '../../../utils/constants'

interface initialStateInterface {
   isAuth: boolean
}

let initialState: initialStateInterface = {
   isAuth: false,
}


const loginReducer = produce((draft: Draft<initialStateInterface>, action: actionInterface) => {
   switch (action.type) {

   }

   return draft
}, initialState)


export default loginReducer