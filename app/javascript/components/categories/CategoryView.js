import React from "react"
import {Table, Card, Button} from "react-bootstrap"
class CategoryView extends React.Component {
  render () {
      if (this.props.data.name && this.props.data.id !== 0) {
          return (
              <div className="col-sm-6 col-lg-4">
                <Card>
                  <Table>
                      <tbody>
                          <tr>
                              <td>{this.props.data.name}</td>
                              <td className="text-right">
                                  <span className="badge badge-default">{this.props.data.goal}%</span>
                              </td>
                          </tr>
                      </tbody>
                  </Table>
                <Button size="sm" className='x' variant="danger" onClick={()=>this.props.deleteCategory(this.props.data.id)} />
                </Card>
              </div>
          )
      }
          else {
              return ""
          }
  }
}

export default CategoryView
