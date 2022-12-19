import produce, { Draft } from 'immer'
import { actionInterface } from '../../../utils/constants'
import { v4 as uuidv4 } from "uuid"


interface initialStateInterface {
  userId: string,
  isAuth: boolean,
  name: string,
  avatarSrc: string,
}

let initialState: initialStateInterface = {
  userId: uuidv4(),
  isAuth: true,
  name: "lyme",
  avatarSrc: "https://leonardo.osnova.io/f488fca4-88d6-c978-d052-4d49a3a62a44/-/format/webp/",
}


const loginReducer = produce((draft: Draft<initialStateInterface>, action: actionInterface) => {
  switch (action.type) {

  }

  return draft
}, initialState)


export default loginReducer