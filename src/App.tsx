import {Container} from "./components/Container"
import {Heading} from "./components/Heading"

import "./styles/global.css"
import "./styles/theme.css"

export function App(){
    console.log("Olá Mundo!")
    return(
        <>
            <Container>
                <Heading>
                    <p>LOGO</p>
                </Heading>
            </Container>

            <Container>
                <Heading>
                    <p>MENU</p>
                </Heading>
            </Container>

            <Container>
                <Heading>
                    <p>FORM</p>
                </Heading>
            </Container>

            <Container>
                <Heading>
                    <p>FOOTER</p>
                </Heading>
            </Container>
        </>
    )
}
    
