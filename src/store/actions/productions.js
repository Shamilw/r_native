import { LOAD_PROD} from '../types'
import { PRODUCTS } from '../../data'

export const loadAllProducts = () => {
  return {
    type: LOAD_PROD,
    payload: PRODUCTS
  }
}

