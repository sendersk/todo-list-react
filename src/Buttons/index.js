import React from "react";
import { Container, Button } from "./styled";

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => (
    tasks.length > 0 && (
        <Container>
            <Button 
                onClick={toggleHideDone}
            >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={setAllDone}
                disabled={ tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </Container>
    )
);

export default Buttons;