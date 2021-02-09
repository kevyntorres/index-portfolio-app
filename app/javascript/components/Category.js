import React from "react"
import PropTypes from "prop-types"
import {Page, Button, Card, Form, Nav, Grid} from "tabler-react"
import CategoryView from "./CategoryView";
import NewItem from "./NewItem";
import AddCategory from "./AddCategory";
class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            addForm: false
        }
        this.handleNewButton = this.handleNewButton.bind(this)
    }
    componentDidMount(){
        fetch('/v1/categories')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data
                })
            });
    }

    categoryItems(items) {
        return (
            items.map(cat=> <CategoryView key={cat.id} data={cat} />)
        )
    }

    handleNewButton(){
        this.setState((prevState) => {
            return {
                addForm: !prevState.addForm
            }
        })
    }

    saveButton(name){
        alert(name)
    }

    render (){
        return (
          <React.Fragment>
            <Page.Content>
                <Page.Card
                    title="Categories"
                    footer={
                        <Card.Footer>
                            <div className="d-flex">
                                <Button id="addButton" color="primary" icon="plus" className="ml-auto" onClick={this.handleNewButton}>
                                    { this.state.addForm ? "Close" : "Add New" }
                                </Button>
                            </div>
                        </Card.Footer>
                    }
                >
                    <Grid.Row cards={true}>
                    { this.categoryItems(this.state.data)}
                    </Grid.Row>
                </Page.Card>
                { this.state.addForm ? <AddCategory saveButton={this.saveButton} handleNewButton={this.handleNewButton}/> : "" }
            </Page.Content>
          </React.Fragment>
        );
     }
}

export default Category
