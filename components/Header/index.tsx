import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SME</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link href='/'><a className="nav-link">Home</a></Link>
                        <Link href='/about'><a className="nav-link">About</a></Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
