import React from "react"
import PropTypes from "prop-types"
import {Page, Button, Card, Form, Nav, Grid} from "tabler-react"
import CategoryView from "./CategoryView";
import NewItem from "./NewItem";
import AddCategory from "./AddCategory";
import CategoryGraph from "./CategoryGraph";
class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            addForm: false
        }
        this.handleNewButton = this.handleNewButton.bind(this)
        this.saveButtonMethod = this.saveButtonMethod.bind(this)
        this.deleteCategory = this.deleteCategory.bind(this)
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

    deleteCategory(id){
        fetch(`'/v1/categories/${id}'`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(() => {
                this.setState((prevState) => {
                    let data = prevState.data
                    data.filter((cat)=>cat.id !== id)
                    return {
                        data: data
                    }
                })
            })
            .catch(error => {
                alert(error);
            })
        this.handleNewButton()
    }

    saveButtonMethod({name, goal}){
        const newCategory = {
            name: name,
            goal: goal
        }

        fetch('/v1/categories', {
            method: 'POST',
            body: JSON.stringify(newCategory),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                console.log(data)
                this.setState((prevState) => {
                    let old_data = prevState.data
                    old_data.push(data)
                    return {
                        data: old_data
                    }
                })
            })
            .catch(error => {
                alert(error);
            })
        this.handleNewButton()
    }

    render (){
        return (
          <React.Fragment>
            <Page.Content>
                <CategoryGraph data={this.state.data}/>
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
                { this.state.addForm ?
                    <AddCategory
                        saveButton={this.saveButtonMethod}
                        handleNewButton={this.handleNewButton}
                        deleteCategory={this.deleteCategory}
                    /> : "" }
            </Page.Content>
          </React.Fragment>
        );
     }
}

export default Category
