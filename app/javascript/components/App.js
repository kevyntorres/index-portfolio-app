import React from "react"
import HelloWorld from './HelloWorld'
import Category from './Category'
import AddCategory from './AddCategory'
import Operation from './Operation'
import Item from './Item'
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Page } from "tabler-react"
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />
        <Page.Content>
            <Switch>
              <Route exact path="/" render={() => ("Home!")} />
              <Route exact path="/hello" render={() => <HelloWorld greeting= "Friend" />} />
              <Route exact path="/categories" render={() => <Category />} />
              <Route exact path="/categories/new" render={() => <AddCategory />} />
              <Route exact path="/operations" render={() => <Operation />} />
              <Route exact path="/assets" render={() => <Item />} />
            </Switch>
        </Page.Content>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App
