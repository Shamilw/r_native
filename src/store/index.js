import { createStore, combineReducers } from 'redux'
import { pricearrReducer } from './reducers/priceArr'
import { productReducer } from './reducers/productions'

const rootReducer = combineReducers({
    product: productReducer,
    price: pricearrReducer
  })
  
  export default createStore(rootReducer)