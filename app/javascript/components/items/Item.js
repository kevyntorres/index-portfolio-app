import React from "react"
import PropTypes from "prop-types"
import {Page} from "tabler-react";
class Item extends React.Component {
  render () {
    let {mode} = this.props

    return (
      <React.Fragment>
        <Page.Content>
            {mode}
        </Page.Content>
      </React.Fragment>
    );
  }
}

export default Item
