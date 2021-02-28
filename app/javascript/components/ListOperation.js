import React from "react"
import {Button} from "tabler-react";
class ListOperation extends React.Component {
  itemCols(items) {
    return (
            <tr>
              <td>
                {items.id}
              </td>
              <td className="text-muted d-none d-md-table-cell text-nowrap">
                {items.item_id}
              </td>
              <td className="text-muted d-none d-md-table-cell text-nowrap">
                {items.operations_type}
              </td>
              <td className="text-muted d-none d-md-table-cell text-nowrap">
                {items.tax}
              </td>
              <td className="text-muted d-none d-md-table-cell text-nowrap">
                {items.quantity}
              </td>
              <td className="text-muted d-none d-md-table-cell text-nowrap">
                {items.price}
              </td>
              <td className="text-muted d-none d-md-table-cell text-nowrap">
                {items.platform}
              </td>
              <td className="d-none d-md-table-cell text-nowrap">
                <Button.List>
                  <Button size="sm" outline color="primary">Edit</Button>
                </Button.List>
              </td>
            </tr>
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
