import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const UserForm = () => {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userNumber, setUserNumber] = useState('')

    const userInfoAdd = (e) => {
        e.preventDefault()

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            userName, userEmail, userNumber
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/userInfo", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if(result === 'Successfully'){
                    alert('Add data')
                    setUserName('')
                    setUserEmail('')
                    setUserNumber('')
                }
            })
            .catch(error => console.log('error', error));

    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
                <div style={{ width: '40rem', boxShadow: ' 0 0 5px 1px gray', borderRadius: '1rem' }}>
                    <Form style={{ padding: '20px' }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setUserName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUserEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Phone No:</Form.Label>
                            <Form.Control type="number" placeholder="Enter Number" onChange={(e) => setUserNumber(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => userInfoAdd(e)}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default UserForm