// import { act } from "react-dom/test-utils"

const fetchUsers = (state = [], action)  => {
  switch (action.type) {
    case 'GET_ALL_USERS':
        return {...state, users:action.users}
    case 'CREATE_USER':
        return {...state, newuser:action.payload}
    // case 'DELETE_USERS':
    //     return [...state, action.deletedId]
    default:
      return state
  }
}

export  { fetchUsers }

const fetchToken = (state = [], action) => {
  switch (action.type){
    case 'POST_USER':
        return {...state, token:action.token,loginSuccess:true}
    case 'LOGIN_ERROR':
        return {...state,loginSuccess:false}
    case 'CLEAR_TOKEN':
      let abc = Object.assign({},state)
      abc.token.data.token=undefined
        return abc
    default:
      return state
  }
}
export {fetchToken}