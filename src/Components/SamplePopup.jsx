import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import {createUserAction} from '../actions/usersaction'

const SamplePopup = React.memo((props) =>{

    const [firstname, setFirstname] = useState('');
    const [job, setjob] = useState('');

    const closePopup = (e) => { props.close() };
    const dispatch =  useDispatch();
    const onCreateButtonClick = () =>{
        debugger;
        dispatch(createUserAction(firstname,job))
    }

    return(
        <div>
            <Modal isOpen={props.open} toggle={closePopup}  >
                <ModalHeader toggle={closePopup} >
                    <span>Create New User</span>
                </ModalHeader>
                <ModalBody>
                   <label>First Name</label>
                   <Input type="text" placeholder="Enter your first name" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
                   <label>Job</label>
                   <Input type="text" placeholder="Enter your Job title" value={job} onChange={(e)=>{setjob(e.target.value)}}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={closePopup}>close</Button>
                    <Button color="primary" onClick={onCreateButtonClick}>Create</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
})
export default SamplePopup