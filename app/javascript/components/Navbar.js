import React from "react"
import { Navbar, Nav } from 'react-bootstrap';

class NavbarComponent extends React.Component {

    navItems(items) {
        return (
            items.map(item => <Nav.Link key={item.name} href={item.to}>{item.name} </Nav.Link>)
        )

    }
    render () {
    const itemsMenu = [
        {
            name: "Home",
            icon: "home",
            to: "/hello"
        },
        {
            name: "Categories",
            icon: "folder",
            to: "/categories"
        },
        {
            name: "Operations",
            icon: "refresh-ccw",
            to: "/operations"
        },
        {
            name: "Assets",
            icon: "box",
            to: "/assets"
        }
    ]
    return (
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Navbar.Brand href="/">
                <img
                  alt="IndexPortfolioApp"
                  src="./assets/logo.jpeg"
                  width="220"
                  height="65"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                      {this.navItems(itemsMenu)}
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
    );
  }
}

export default NavbarComponent
