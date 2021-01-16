import React from 'react'
import { Table,TableBody,TableRow } from "@material-ui/core";
const UserTable = React.memo((props) => {
    return (
        <div>
            <Table >
                <TableBody>
                <UserHeader />
                {
                    props.userData.map(user => {
                        return <UserData userProfile={user} onDeleteUser = {(_id)=>{
                            props.deleteClick(_id)
                        }}/>
                    })
                }
                </TableBody>
            </Table>
        </div>
    )
})

const UserHeader = () => {
    return (<TableRow>
        <th>ID</th>
        <th>Email</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Photo</th>
        
    </TableRow>)
}

const UserData = (props) => {
    return (<TableRow>
        <td>{props.userProfile.id}</td>
        <td>{props.userProfile.email}</td>
        <td>{props.userProfile.first_name}</td>
        <td>{props.userProfile.last_name}</td>
        {/* <td><img src={props.userProfile.avatar} /></td> */}
        {/* <td><input type="checkbox" checked={props.userProfile.isActive} /></td> */}
        {/* <td><button onClick = {()=>{props.onDeleteUser(props.userProfile._id)}}>Delete</button></td> */}
        
    </TableRow>)
}
export default UserTable;