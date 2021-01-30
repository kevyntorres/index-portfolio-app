import React from "react"
import PropTypes from "prop-types"
import {Page} from "tabler-react";
class Item extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Page.Content>
          <h1> this is Items page </h1>
        </Page.Content>
      </React.Fragment>
    );
  }
}

export default Item
