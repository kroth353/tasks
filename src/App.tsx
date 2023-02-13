import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import quokka from "./quokka.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Kayla Roth Hello
                World!!
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <header> Beginning of Task 3 </header>
            <p></p>

            <header></header>
            <Container>
                <Row>
                    <Col>
                        {" "}
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>{" "}
                        <p></p>
                        Fruits:
                        <ol>
                            <li>Bananas </li>
                            <li>Apples</li>
                            <li>Oranges</li>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: 150,
                                    height: 50
                                }}
                            >
                                {" This will have a red background"}
                            </div>
                        </ol>
                    </Col>

                    <Col>
                        <p>
                            <img src={quokka} alt="Quokka" />
                        </p>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 150,
                                height: 50
                            }}
                        >
                            {" This will also have a red background"}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
