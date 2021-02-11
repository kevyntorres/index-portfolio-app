import React from "react"
import PropTypes from "prop-types"
import {Button, Card, Page, Table} from 'tabler-react'
import ListItem from "./ListItem";
class AllItems extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
    this.deleteItem = this.deleteItem.bind(this)
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

    deleteItem(itemId){
        this.setState((prevState)=>{
            data: prevState.data.filter(item => item.id !== itemId)
        })
    }

    assetsItems(items) {
        return (
            items.map(item=> <ListItem key={item.id} data={item} deleteItem={this.deleteItem(item.id)}/>)
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
                          <Button color="primary" icon="plus" RootComponent="a" href="/assets/new" className="ml-auto">
                            Add new
                          </Button>
                        </div>
                      </Card.Footer>
                    }
        >
            <Card>
                <Table className="card-table table-vcenter">
                    <Table.Body>
                        {this.assetsItems(this.state.data)}
                    </Table.Body>
                </Table>
            </Card>
        </Page.Card>
        <h1>All</h1>
      </React.Fragment>
    );
  }
}

export default AllItems
