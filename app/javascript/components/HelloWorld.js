import React from "react"
import PropTypes from "prop-types"
import Conditional from "./Conditional";
class HelloWorld extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render () {
    return (
      <React.Fragment>
        <h1> Greeting: {this.props.greeting} </h1>
        <Conditional isLoading={this.state.isLoading} />
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
