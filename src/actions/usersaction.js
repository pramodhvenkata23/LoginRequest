import axios from "axios"
import { getUsersApi, postApi } from "../api/api"


export const postUserLogin = (token) => ({
  type:'POST_USER',
  token
})

export const loginError = () => ({
  type:'LOGIN_ERROR',
})

export const getUsers = (users) => ({
  type: 'GET_ALL_USERS',
  users
})

export const deleteUsers = (deletedId) => ({
  type: 'DELETE_USERS',
  deletedId
})

export const clearToken = () =>({
  type:'CLEAR_TOKEN'
  
})

export const createUser = (payload) =>({
  type:'CREATE_USER',
  payload
})

export const getAllUsers = () => dispatch => {
  getUsersApi().then(data => {
    dispatch(getUsers(data))
  }).catch(err=>{
    console.log("Error :  "+ err)
  })
}


export const postUserAction = (eml,pass) => dispatch =>{
  const data = {email:eml,password:pass};
  postApi(data).then(res =>{
    dispatch(postUserLogin(res))
  }).catch(err=>{dispatch(loginError());
    console.log(err)
  })  
}

export const clearTokenAction = () => dispatch =>{
  dispatch(clearToken())
}
 

export const createUserAction = (name,job) =>{
  const data = {name:name,job:job};
  const createUserPromise = axios.post(`https://reqres.in/api/users`,data)
  return (dispatch) =>{
    createUserPromise.then(res =>{
      dispatch(createUser(res))
    }).catch(err=>{console.log("Error: "+ err)})
  }
}


export const deleteUser = (deletedId) => dispatch => {
  dispatch(deleteUsers(deletedId))
}
