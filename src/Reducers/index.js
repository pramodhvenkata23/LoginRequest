import { combineReducers } from 'redux'
import {fetchUsers,fetchToken} from './users'

export default combineReducers({
    fetchUsers,
    fetchToken
})
