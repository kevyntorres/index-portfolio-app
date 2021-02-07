import React from "react"
import PropTypes from "prop-types"
import {Table, Button} from "tabler-react"
class ListItem extends React.Component {

    itemCols(items) {
        return (
            <Table.Row>
                <Table.Col>
                    {items.name}
                </Table.Col>
                <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                    {items.isin}
                </Table.Col>
                <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                    {items.price}
                </Table.Col>
                <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                    {items.category_id}
                </Table.Col>
                <Table.Col className="text-right d-none d-md-table-cell text-nowrap">
                    <Button.List>
                        <Button onClick={this.props.deleteItem} size="sm" outline color="primary">Edit</Button>
                            <a href={"v1/items/"+items.id} data-method="delete" data-confirm="Are you sure?">
                                <Button
                                    size="sm"
                                    outline
                                    color="danger"
                                >Delete
                                </Button>
                            </a>
                    </Button.List>
                </Table.Col>
            </Table.Row>
        )
    }
  render () {
    return (
      <React.Fragment>
            {this.itemCols(this.props.data)}
      </React.Fragment>
    );
  }
}

export default ListItem
