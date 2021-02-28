import React from "react"
import { Card, Container, Button, Table } from "react-bootstrap";
import ListItem from "./ListItem";
import NewItem from "./NewItem";
import {FiPlus} from "react-icons/fi";
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

    deleteItem(id){
        let result = confirm("Want to delete?");
        if (result) {
            fetch(`/v1/items/${id}`, {
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
            items.map(cat => <th>{cat}</th>)
        )
    }

    assetsItems(items) {
        return (
            items.map(item=> <ListItem key={item.id} data={item} deleteItem={this.deleteItem} />)
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
            <Container>
                <Card>
                    <Card.Header className="bg-white">Assets</Card.Header>
                    <Card.Body>
                        <Card>
                            <Table className="card-table table-vcenter">
                                <thead>
                                <tr>
                                    {this.itemsHeaders()}
                                </tr>
                                </thead>
                                <tbody>
                                    {this.assetsItems(this.state.data)}
                                </tbody>
                            </Table>
                        </Card>
                    </Card.Body>
                    <Card.Footer className="bg-white">
                        <div className="d-flex">
                            <Button id="addButton" variant="primary" className="ml-auto" onClick={this.handleNewButton}>
                                <FiPlus /> { this.state.addForm ? "Close" : "Add New" }
                            </Button>
                        </div>
                    </Card.Footer>
                </Card>
                { this.state.addForm ?
                    <NewItem
                        saveButton={this.saveButtonMethod}
                        handleNewButton={this.handleNewButton}
                    /> :
                    "" }
                <h1>All</h1>
            </Container>
        );
    }
}

export default Item
