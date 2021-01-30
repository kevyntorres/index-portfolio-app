import React from "react"
import PropTypes from "prop-types"
import { Site } from "tabler-react";
class Footer extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Site.Footer note={"Footer"} />
      </React.Fragment>
    );
  }
}

export default Footer
