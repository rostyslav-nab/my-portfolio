import React from 'react';
import './myWork.scss'
import Nav from '../Nav/Nav';
import { Card, Button } from 'react-bootstrap';

const MyWork = ()=>{
        return (
            <React.Fragment>
                <div className="mainContent">
                    <div className="leftBlock">
                        <Nav />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Card className="card-container" style={{ width: '18rem', background: "#181818" }}>
                                    <Card.Img variant="top" src="./my-work1.png" />
                                    <Card.Body>
                                        <Card.Title className="main-card-title">Portfolio</Card.Title>
                                        <Card.Text className="descr-card-title">
                                            This is my main resume site that you see now
                                        </Card.Text>
                                        <Button className="card-btn" variant="dark"><a target="_blank" rel="noopener noreferrer" href="https://kyiv.codes/">View</a></Button>
                                        <Button className="card-btn" variant="dark"><a target="_blank" rel="noopener noreferrer" href="https://github.com/rostyslav-nab/my-portfolio">Github source code</a></Button>
                                    </Card.Body>
                                </Card>
                                <Card className="card-container" style={{ width: '18rem', background: "#181818" }}>
                                    <Card.Img variant="top" src="./my-work2.png" />
                                    <Card.Body>
                                        <Card.Title className="main-card-title">Currency Exchange</Card.Title>
                                        <Card.Text className="descr-card-title">
                                            The site receives data on current exchange rates using the free API
                                        </Card.Text>
                                        <Button className="card-btn" variant="dark"><a target="_blank" rel="noopener noreferrer" href="https://currency-exchange-6527c.web.app/">View</a></Button>
                                        <Button className="card-btn" variant="dark"><a target="_blank" rel="noopener noreferrer" href="https://github.com/rostyslav-nab/Currency-exchange">Github source code</a></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
}

export default MyWork;