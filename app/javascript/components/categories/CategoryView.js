import React from "react"
import {Badge, Grid, } from "tabler-react"
import {Table, Card, Button} from "react-bootstrap"
class CategoryView extends React.Component {
  render () {
      if (this.props.data.name && this.props.data.id !== 0) {
          return (
              <Grid.Col sm={6} lg={4}>
                <Card>
                  <Table>
                      <tbody>
                          <tr>
                              <td>{this.props.data.name}</td>
                              <td className="text-right">
                                  <Badge color="default">{this.props.data.goal}%</Badge>
                              </td>
                          </tr>
                      </tbody>
                  </Table>
                <Button size="sm" className='x' variant="danger" onClick={()=>this.props.deleteCategory(this.props.data.id)} />
                </Card>
              </Grid.Col>
          )
      }
          else {
              return ""
          }
  }
}

export default CategoryView
