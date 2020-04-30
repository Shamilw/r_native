import { LOAD_PRICEARR} from '../types'
import { DATA } from '../../data'

export const loadPriceArr = () => {
  return {
    type: LOAD_PRICEARR,
    payload: DATA
  }
}

