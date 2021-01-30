import React from "react"
import HelloWorld from './HelloWorld'
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route} from 'react-router-dom'
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => ("Home!")} />
          <Route path="/hello" render={() => <HelloWorld greeting= "Friend" />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
