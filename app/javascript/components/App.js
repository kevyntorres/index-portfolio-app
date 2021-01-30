import React from "react"
import HelloWorld from './HelloWorld'
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from "./Navbar";
import Footer from "./Footer";
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => ("Home!")} />
          <Route path="/hello" render={() => <HelloWorld greeting= "Friend" />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App
