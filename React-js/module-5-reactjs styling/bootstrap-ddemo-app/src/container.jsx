import React from 'react';
import { Container,Row,Button } from 'react-bootstrap';
import Buttonapp from './button';


export default function Containerapp(){
    return(
        <>
        <Container className='bg-secondary text-white text-center p-5 mt-5 rounded-5'>
            <h1> This Is Container Component</h1>
        </Container>

        <Buttonapp/>
        </>
    )
}