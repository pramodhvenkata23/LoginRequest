import React,{useEffect, useState} from 'react';
import UserTable from './UserTable';
import {getAllUsers, clearTokenAction} from '../actions/usersaction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import SamplePopup from './SamplePopup';
import { Container } from 'reactstrap';
import Button from '@material-ui/core/Button'
import { Table, TableCell as td, TableRow, Typography,TableBody, TableHead } from '@material-ui/core';

const HomePage = React.memo((props) => {

    const [popupOpen,setPopupOpen] = useState(false)

    const history = useHistory();

    const responseToken = useSelector(state => state.fetchToken);

    const authToken = responseToken.token?.data?.token 

    const data = useSelector(state => state.fetchUsers);
    
    const dis = useDispatch();

    useEffect(()=>{
        dis(getAllUsers())}, [dis]);
    

    const samplePopupOpen = () => {
        setPopupOpen(true)
    }
    
    const samplePopupClose = () =>{
        setPopupOpen(false)
    }

    useEffect(() => {
        debugger;
        if(!authToken){
            history.push('/')
        }
        
    }, [!authToken])

    const onLogoutClick = () =>{
        dis(clearTokenAction());
        
    }
 
return(
    
    <Container fluid>
        <SamplePopup
                open={popupOpen}
                close={samplePopupClose}/> 
               
        <Typography>
            Welcome to the Home Page
        </Typography>
        <span style = {{color: "green"}}>{history.location.state.username}</span><br/><br/>
        <Button
            variant="contained" 
            color="primary" 
            onClick = {onLogoutClick}>
            Logout</Button><br></br>
        <Button 
            variant="contained" 
            color="secondary" 
            onClick={samplePopupOpen} 
            style={{marginTop:'10px'}}> 
            Add User</Button>

        {(data.users && data.users.data.data) ? <UserTable userData = {data.users.data.data} /> : null}

          <div><NewUserTable/> </div> 
    
    </Container>
      
    )

  
})

const NewHeader = () => {
    return(
        <div>
            <TableRow>
        <th>ID</th>
        <th>Name</th>
        <th>Job</th>
      
    </TableRow>
        </div>
    )
}

const NewUserTable = () =>{
    return(
        <div>
            <Table>
                <TableBody>
                <NewHeader/>
                <TableRow>
                    <td>geello</td>
                    <td>geello</td>
                    <td>geello</td>
                </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
export default HomePage