import React from "react"
import { Table, Container, Card, Button } from "react-bootstrap";
import ListOperation from "../ListOperation";
import AddOperation from "./AddOperation";
import {FiPlus} from "react-icons/fi";
class Operation extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            addForm: false
        }
        this.handleNewButton = this.handleNewButton.bind(this)
        this.saveButtonMethod = this.saveButtonMethod.bind(this)
    }

    componentDidMount(){
        fetch('/v1/operations')
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

    saveButtonMethod({item_id, operations_type, tax, quantity, price, platform, operated_at}){
        const newItem = {
            item_id: parseInt(item_id),
            type: operations_type,
            tax: tax,
            quantity: quantity,
            price: price,
            platform: platform,
            operated_at: operated_at,
        }

        fetch('/v1/operations', {
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

    operationItems(items) {
        return (
            items.map(cat=> <ListOperation key={cat.id} data={cat} deleteItem={this.deleteOperation} />)
        )
    }

    deleteOperation(id){
        let result = confirm("Want to delete?");
        if (result) {
            fetch(`/v1/operations/${id}`, {
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

    operationHeaders() {
        let items = [
            'ID',
            'Item ID',
            'Type',
            'Tax',
            'Quantity',
            'Price',
            'Platform',
            '']
        return (
            items.map(cat => <th>{cat}</th>)
        )
    }

  render () {
    return (
        <Container>
            <Card>
                <Card.Header className="bg-white">Operations</Card.Header>
                <Card.Body>
                    <div className="col-12">
                        <Card>
                            <Table>
                                <thead>
                                    <tr>
                                        {this.operationHeaders()}
                                    </tr>
                                </thead>
                            <tbody>
                                {this.operationItems(this.state.data)}
                            </tbody>
                            </Table>
                        </Card>
                    </div>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <div className="d-flex">
                        <Button id="addButton" color="primary" icon="plus" className="ml-auto" onClick={this.handleNewButton}>
                            <FiPlus /> { this.state.addForm ? "Close" : "Add New" }
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
            { this.state.addForm ?
                <AddOperation
                    saveButton={this.saveButtonMethod}
                    handleNewButton={this.handleNewButton}
                /> : "" }
            <h1>All</h1>
        </Container>
    );
  }
}

export default Operation
