import React from "react"
import PropTypes from "prop-types"
import {Table, Badge, Grid} from "tabler-react"
class CategoryView extends React.Component {
  render () {
      if (this.props.data.name) {
          return (
              <Grid.Col sm={6} lg={4}>
                  <Table cards>
                      <Table.Row>
                          <Table.Col>{this.props.data.name}</Table.Col>
                          <Table.Col alignContent="right">
                              <Badge color="default">{this.props.data.goal}%</Badge>
                          </Table.Col>
                      </Table.Row>
                  </Table>
              </Grid.Col>
          )
      }
          else {
              return ""
          }
  }
}

export default CategoryView