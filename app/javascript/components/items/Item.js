import React from "react"
import {Button, Card, Page, Table} from "tabler-react";
import ListItem from "./ListItem";
import NewItem from "./NewItem";
class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            addForm: false
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.handleNewButton = this.handleNewButton.bind(this)
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
                    <NewItem/> :
                    "" }
                <h1>All</h1>
            </React.Fragment>
        );
    }
}

export default Item
