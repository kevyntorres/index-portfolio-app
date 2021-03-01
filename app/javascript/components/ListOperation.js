import React from "react"
import { Button } from "react-bootstrap";
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
                  <Button size="sm" variant="outline-primary">Edit</Button>
              </td>
            </tr>
    )
  }
  render () {
    return (
        <>
          {this.itemCols(this.props.data)}
        </>
    );
  }
}

export default ListOperation
