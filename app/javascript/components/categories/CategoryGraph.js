import React from "react"
import PropTypes from "prop-types"
import { Card, colors } from 'tabler-react'
import C3Chart from "react-c3js";
import 'c3/c3.css';
class CategoryGraph extends React.Component {

    columns(){
        return(
            this.props.data.map((cat => {
                return [cat.id, cat.goal]
            }))
        )
    }

    names(){
        let obj = {}
        this.props.data.map((cat => {
            return obj[cat.id] = cat.name
        })
        )
        return obj
    }

    render () {
        console.log(this.names())

        const data = {
            columns:
               this.columns()
            ,
            type: "pie", // default type of chart,
            names: this.names()
        }


    return (
      <React.Fragment>
        <Card>
          <Card.Header>
            <Card.Title>Chart title</Card.Title>
          </Card.Header>
          <Card.Body>
            <C3Chart
                style={{ height: "12rem" }}
                data={ data }
                legend={{
                  show: false, //hide legend
                }}
                padding={{
                  bottom: 0,
                  top: 0,
                }}
            />
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default CategoryGraph
