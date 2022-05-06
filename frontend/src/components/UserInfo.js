import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import NavBar from './NavBar';

const UserInfo = () => {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch("http://localhost:5000/showUser", requestOptions)
            .then(response => response.json())
            .then(result => {
                setUserData(result)
                console.log(result);
            })
            .catch(error => console.log('error', error));
    }, [])

    const handleRemoveItem = (name) => {
        setUserData(userData.filter(item => item.userName !== name));
       };

    return (
        <>
            <NavBar/>
            
                <div  style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'10px', padding:'3rem'}}>
                        {
                            userData.map((val, index) => (
                                <Card style={{ width: '18rem' }} key={index}>
                                    <Card.Body>
                                        <Card.Title>User Delails</Card.Title>
                                        <Card.Text>
                                            <h4>Name: {val.userName}</h4>
                                            <h4>Email: {val.userEmail} </h4>
                                            <h4>Phone NO: {val.userNumber}</h4>
                                        <Button variant="primary" onClick={(e)=>handleRemoveItem(val.userName)}>Delete</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                </div>
            
        </>
    )
}

export default UserInfo