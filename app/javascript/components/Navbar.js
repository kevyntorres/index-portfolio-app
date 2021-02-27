import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FiHome, FiFolder, FiRefreshCcw, FiBox } from "react-icons/fi";
import { IconContext } from "react-icons";

class NavbarComponent extends React.Component {

    navItems(items) {
        return (
            items.map(item => {
                return(
                    <IconContext.Provider value={{ className: "navbar-icons" }}>
                        <Nav.Link key={item.key} href={item.to}>{item.icon} {item.name} </Nav.Link>
                    </IconContext.Provider>
                )
            }))
    }
    render () {
    const itemsMenu = [
        {
            key: 1,
            name: "Home",
            icon: <FiHome />,
            to: "/"
        },
        {
            key: 2,
            name: "Categories",
            icon: <FiFolder />,
            to: "/categories"
        },
        {
            key: 3,
            name: "Operations",
            icon: <FiRefreshCcw />,
            to: "/operations"
        },
        {
            key: 4,
            name: "Assets",
            icon: <FiBox />,
            to: "/assets"
        }
    ]
    return (
        <>
            <Navbar bg="white" className="navbar-header">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="IndexPortfolioApp"
                            src="./assets/logo.jpeg"
                            width="220"
                            height="65"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar bg="white" className="navbar-header" collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {this.navItems(itemsMenu)}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
  }
}

export default NavbarComponent
