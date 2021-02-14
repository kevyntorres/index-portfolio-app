import React from "react"
import {Page, Card, Table, Grid, Button} from "tabler-react";
import ListOperation from "../ListOperation";
import AddCategory from "../categories/AddCategory";
import AddOperation from "./AddOperation";
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
            items.map(cat => <Table.ColHeader>{cat}</Table.ColHeader>)
        )
    }

  render () {
      console.log(this.state.data)
    return (
      <React.Fragment>
        <Page.Content>
            { this.state.addForm ?
                <AddOperation
                /> : "" }
            <Page.Card
                header={
                    <Card.Header>
                        <Card.Title>Operations</Card.Title>
                        <Button id="addButton" color="primary" icon="plus" className="ml-auto" onClick={this.handleNewButton}>
                            { this.state.addForm ? "Close" : "Add New" }
                        </Button>
                    </Card.Header>
                }
            >
                <Grid.Col width={12}>
                    <Card>
                        <Table>
                            <Table.Header>
                                {this.operationHeaders()}
                            </Table.Header>
                        <Table.Body>
                            {this.operationItems(this.state.data)}
                        </Table.Body>
                        </Table>
                    </Card>
                </Grid.Col>
            </Page.Card>
        </Page.Content>
      </React.Fragment>
    );
  }
}

export default Operation
