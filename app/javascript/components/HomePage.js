import React from "react"
import CategoryGraph from "./categories/CategoryGraph";
class HomePage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <CategoryGraph />
      </React.Fragment>
    );
  }
}

export default HomePage
