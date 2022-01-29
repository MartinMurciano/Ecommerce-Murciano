import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavigationBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link> <CartWidget/> </Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
};

export default NavigationBar;