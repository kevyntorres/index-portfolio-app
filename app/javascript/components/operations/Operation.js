import React from "react"
import {Page, Card, Table, Grid, Button} from "tabler-react";
import ListOperation from "../ListOperation";
class Operation extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            addForm: false
        }
        // this.handleNewButton = this.handleNewButton.bind(this)
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
            <Grid.Col width={12}>
                <Card>
                    <Card.Header>Operations
                        <Button id="addButton" color="primary" icon="plus" className="ml-auto">
                            Add New
                        </Button>
                    </Card.Header>

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
        </Page.Content>
      </React.Fragment>
    );
  }
}

export default Operation
