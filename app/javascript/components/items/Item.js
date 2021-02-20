import React from "react"
import {Button, Card, Page, Table} from "tabler-react";
import ListItem from "./ListItem";
import NewItem from "./NewItem";
import AddCategory from "../categories/AddCategory";
class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            addForm: false
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.handleNewButton = this.handleNewButton.bind(this)
        this.saveButtonMethod = this.saveButtonMethod.bind(this)
    }
    componentDidMount(){
        fetch('/v1/items')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data
                })
            });
    }
    handleNewButton(){
        this.setState((prevState) => {
            return {
                addForm: !prevState.addForm
            }
        })
    }

    deleteItem(itemId){
        this.setState((prevState)=>{
            let updData = prevState.data.filter(item => item.id !== itemId)
            return {
                data: updData
            }
        })
    }
    itemsHeaders() {
        let items = [
            'ID',
            'Name',
            'ISIN',
            'Price',
            'Type',
            'Category',
            '']
        return (
            items.map(cat => <Table.ColHeader>{cat}</Table.ColHeader>)
        )
    }

    assetsItems(items) {
        return (
            items.map(item=> <ListItem key={item.id} data={item} />)
        )
    }

    saveButtonMethod(data){
        let newItem = {
            name: data.name,
            isin: data.isin,
            price: data.price,
            item_type: data.item_type,
            category_id: data.category_id
        }

        fetch('/v1/items', {
            method: 'POST',
            body: JSON.stringify(newItem),
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

    render () {
        return (
            <React.Fragment>
                <Page.Card
                    title="Assets"
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
                    <Card>
                        <Table className="card-table table-vcenter">
                            <Table.Header>
                                {this.itemsHeaders()}
                            </Table.Header>
                            <Table.Body>
                                {this.assetsItems(this.state.data)}
                            </Table.Body>
                        </Table>
                    </Card>
                </Page.Card>
                { this.state.addForm ?
                    <NewItem
                        saveButton={this.saveButtonMethod}
                        handleNewButton={this.handleNewButton}
                    /> :
                    "" }
                <h1>All</h1>
            </React.Fragment>
        );
    }
}

export default Item
