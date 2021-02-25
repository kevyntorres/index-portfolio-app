import React from "react"
import Category from './categories/Category'
import Operation from './operations/Operation'
import Item from './items/Item'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import NavbarComponent from "./Navbar";
import Footer from "./Footer";
import { Page } from "tabler-react"
import HomePage from "./HomePage";
class App extends React.Component {
  render () {
    return (
    <>
        <NavbarComponent />
        <Page.Content>
            <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => <HomePage />} />
              <Route exact path="/hello" render={() => <HomePage />} />
              <Route exact path="/categories" render={() => <Category />} />
              <Route exact path="/operations" render={() => <Operation />} />
              <Route exact path="/assets" render={() => <Item />} />
            </Switch>
        </BrowserRouter>
        </Page.Content>
        <Footer />
    </>
    );
  }
}

export default App
