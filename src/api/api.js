// const getUsersApi = () =>{
//     // here it will be n ajx call - axios - to fetch user data
//     // axio.get("url of the API")
//     return  new Promise(function(resolve, reject) {
//         resolve([{isActive: true, _id: "5c4cc2109487b0003924f1e3", role: "Administrator", firstName: "Test", lastName: "Admin"}, {isActive: true, _id: "5e2cc6df7a91aaf820510a55", role: "Volunteer", firstName: "Sidd", lastName: "Test"}, {isActive: true, _id: "5ede6be453a0480017164a5b", role: "Volunteer", firstName: "Volunteer 1", lastName: "Test"}]	)
//     });
// }
// export {getUsersApi}

import axios from 'axios';

const getUsersApi = () => {
    return axios.get(`https://reqres.in/api/users/`);
}

export { getUsersApi }

const postApi = (data) =>{
    return axios.post(`https://reqres.in/api/login`,data);
}
export {postApi}