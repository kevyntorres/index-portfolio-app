import React from "react"
import HelloWorld from './HelloWorld'
import Category from './categories/Category'
import AddCategory from './categories/AddCategory'
import Operation from './operations/Operation'
import Item from './items/Item'
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Page } from "tabler-react"
import AllItems from "./items/AllItems";
import NewItem from "./items/NewItem";
import EditItem from "./items/EditItem";
import HomePage from "./HomePage";
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />
        <Page.Content>
            <Switch>
              <Route exact path="/" render={() => <HomePage />} />
              <Route exact path="/hello" render={() => <HomePage />} />
              <Route exact path="/categories" render={() => <Category />} />
              <Route exact path="/operations" render={() => <Operation />} />
              <Route exact path="/assets" render={() => <Item mode={<AllItems/>}/>} />
              <Route exact path="/assets/new" render={() => <Item mode={<NewItem/>}/>} />
              <Route exact path="/assets/edit" render={() => <Item mode={<EditItem/>}/>} />
            </Switch>
        </Page.Content>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App
