import axios from 'axios'
import { CONSTANTS } from '../utils/constants'

export const FetchUsers = async (page) => {

  return await axios({
    method: 'GET',
    url: CONSTANTS.API_URL,
    params: {
      page
    }
  })

}