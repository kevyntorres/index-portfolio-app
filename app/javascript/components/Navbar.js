import React from "react"
import PropTypes from "prop-types"
import { Site, Nav } from "tabler-react";

class Navbar extends React.Component {

    navItems(items) {
        return (
            items.map(item => <Nav.Item value={item.name} icon={item.icon} to={item.to}/>)
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
      <React.Fragment>
        <Site.Header imageURL={'./assets/logo.jpeg'} />
        <Site.Nav items={this.navItems(itemsMenu)}/>
      </React.Fragment>
    );
  }
}

export default Navbar
