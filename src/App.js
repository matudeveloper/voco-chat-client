import background from './background.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import React from "react";
import Stack from 'react-bootstrap/Stack'



const image = { uri: "https://reactjs.org/logo-og.png" };

function App() {
    return (
        <div className="App bg">

            <header className="App-header">
                <h1 class="page-title">KHK</h1>
            </header>
            <body  >
            <Container className="bg-black" >
                <Row md={12}>

                    <Col  xs={12}>
                        <Stack gap={3}>
                            <div className="box-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                            <div className="box-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                            <div className="box-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                            <div className="box-container ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                            <div className="box-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                            <div className="box-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                            <div className="box-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                            <div className="box-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                            <div className="box-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>

                        </Stack>

                    </Col>
                </Row>

            </Container>
            <Container className="bottom-container" >
                <Row md={12}>
                    <Col className="bottom-container-box" xs={2}><p>Guest 3367</p></Col>
                    <Col className="bottom-container-box" xs={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Col>
                </Row>

            </Container>
            <Button variant="outline-primary left">Send</Button>{' '}

            </body>
        </div>
    );


}



export default App;

