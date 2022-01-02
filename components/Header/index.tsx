import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/"><img src="/logo/SME_FIT.png" width="64" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link href='/'><a className="nav-link">Home</a></Link>
                            <Link href='/about'><a className="nav-link">About</a></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
