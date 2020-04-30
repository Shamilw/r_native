import { LOAD_PROD} from '../types'

const initialState = {
  allProducts: [],
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROD:
      return {
        ...state,
        allProducts:action.payload
      }
    default:
      return state
  }
}
