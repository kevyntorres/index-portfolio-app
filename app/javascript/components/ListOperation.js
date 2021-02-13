import React from "react"
import PropTypes from "prop-types"
import {Button, Table} from "tabler-react";
class ListOperation extends React.Component {
  itemCols(items) {
    return (
            <Table.Row>
              <Table.Col>
                {items.id}
              </Table.Col>
              <Table.Col className="text-muted d-none d-md-table-cell text-nowrap">
                {items.item_id}
              </Table.Col>
              <Table.Col className="text-muted d-none d-md-table-cell text-nowrap">
                {items.operations_type}
              </Table.Col>
              <Table.Col className="text-muted d-none d-md-table-cell text-nowrap">
                {items.tax}
              </Table.Col>
              <Table.Col className="text-muted d-none d-md-table-cell text-nowrap">
                {items.quantity}
              </Table.Col>
              <Table.Col className="text-muted d-none d-md-table-cell text-nowrap">
                {items.price}
              </Table.Col>
              <Table.Col className="text-muted d-none d-md-table-cell text-nowrap">
                {items.platform}
              </Table.Col>
              <Table.Col className="d-none d-md-table-cell text-nowrap">
                <Button.List>
                  <Button size="sm" outline color="primary">Edit</Button>
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

export default ListOperation
