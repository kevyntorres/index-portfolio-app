import React from "react"
import {Page, Button, Card, Grid} from "tabler-react"
import CategoryView from "./CategoryView";
import AddCategory from "./AddCategory";
class Category extends React.Component {
    constructor(){
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
            items.map(cat=> <CategoryView key={cat.id} data={cat} deleteCategory={this.deleteCategory} />)
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
        let result = confirm("Want to delete?");
        if (result) {
            fetch(`/v1/categories/${id}`, {
                method: 'DELETE'
            })
                .then(response => {
                    if (response.ok) {
                        this.setState((prevState) => {
                            let data = prevState.data.filter((cat)=>cat.id !== id)
                            return {
                                data: data
                            }
                        })
                    } else {
                        throw new Error('Something went wrong');
                    }
                })
            }
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
                { this.state.addForm ?
                    <AddCategory
                        saveButton={this.saveButtonMethod}
                        handleNewButton={this.handleNewButton}
                    /> : "" }
            </Page.Content>
        );
     }
}

export default Category
