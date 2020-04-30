import { LOAD_PRICEARR } from '../types'

const initialState = {
  allPriceArr: [],
}

export const pricearrReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRICEARR:
      return {
        ...state,
        allPriceArr:action.payload
      }
    default:
      return state
  }
}
