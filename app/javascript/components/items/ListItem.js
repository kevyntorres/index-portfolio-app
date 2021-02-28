import React from "react"
import { Button} from "react-bootstrap"
class ListItem extends React.Component {

    itemCols(items) {
        return (
            <tr>
                <td>
                    {items.id}
                </td>
                <td>
                    {items.name}
                </td>
                <td className="text-muted d-none d-md-table-cell text-nowrap">
                    {items.isin}
                </td>
                <td className="text-muted d-none d-md-table-cell text-nowrap">
                    {items.price}
                </td>
                <td className="text-muted d-none d-md-table-cell text-nowrap">
                    {items.item_type}
                </td>
                <td className="text-muted d-none d-md-table-cell text-nowrap">
                    {items.category_id}
                </td>
                <td className="text-center d-none d-md-table-cell text-nowrap">
                        <Button size="sm" variant="outline-primary">Edit</Button>{' '}
                        <Button
                            size="sm"
                            variant="outline-danger"
                            onClick={()=>this.props.deleteItem(this.props.data.id)}
                        >Delete
                        </Button>
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

export default ListItem
