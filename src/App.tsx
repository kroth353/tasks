import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
<<<<<<< HEAD
import quokka from "./quokka.jpeg";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Kayla Roth Hello
                World!!
            </header>
<<<<<<< HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1 style={{ background: "green" }}>beginning of task 3</h1>
            <p></p>
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
                                    width: 150,
                                    height: 50,
                                    backgroundColor: "red"
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
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
