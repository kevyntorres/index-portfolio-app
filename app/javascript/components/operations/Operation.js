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
        // this.saveButtonMethod = this.saveButtonMethod.bind(this)
        // this.deleteCategory = this.deleteCategory.bind(this)
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

    operationItems(items) {
        return (
            items.map(cat=> <ListOperation key={cat.id} data={cat} />)
        )
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
      console.log(this.state.data)
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
                /> : "" }
        </Container>
    );
  }
}

export default Operation
