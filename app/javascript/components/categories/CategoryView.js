import React from "react"
import PropTypes from "prop-types"
import {Table, Badge, Grid, Card, Button} from "tabler-react"
class CategoryView extends React.Component {
  render () {
      if (this.props.data.name) {
          return (
              <Grid.Col sm={6} lg={4}>
                <Card>
                  <Table cards>
                      <Table.Body>
                          <Table.Row>
                              <Table.Col>{this.props.data.name}</Table.Col>
                              <Table.Col alignContent="right">
                                  <Badge color="default">{this.props.data.goal}%</Badge>
                              </Table.Col>
                          </Table.Row>
                      </Table.Body>
                      </Table>
                    <Button size="sm" className='x' color="danger" onClick={()=>this.props.deleteCategory(this.props.data.id)} />
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
