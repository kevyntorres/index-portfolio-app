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
                        <Nav.Link key={item.to} href={item.to}>{item.icon} {item.name} </Nav.Link>
                    </IconContext.Provider>
                )
            }))
    }
    render () {
    const itemsMenu = [
        {
            name: "Home",
            icon: <FiHome />,
            to: "/"
        },
        {
            name: "Categories",
            icon: <FiFolder />,
            to: "/categories"
        },
        {
            name: "Operations",
            icon: <FiRefreshCcw />,
            to: "/operations"
        },
        {
            name: "Assets",
            icon: <FiBox />,
            to: "/assets"
        }
    ]
    return (
        <>
            <Navbar className="navbar-header">
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
            <Navbar className="navbar-header" collapseOnSelect expand="lg" variant="light">
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
