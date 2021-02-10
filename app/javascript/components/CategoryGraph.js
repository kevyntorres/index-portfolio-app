import React from "react"
import PropTypes from "prop-types"
import { Card, colors } from 'tabler-react'
import C3Chart from "react-c3js";
import 'c3/c3.css';
class CategoryGraph extends React.Component {

    names(){
        return (
            this.props.data.map((cat => {
                return [cat.key, cat.name]
            }))
        )
    }

    render () {
        let columnsArray = () => {
            return (
                [this.props.data.map((cat => {
                    return [cat.key, cat.goal]
                }))]
            )
        }

        console.log(columnsArray)

        const data = {
            columns: columnsArray,
            type: "pie", // default type of chart,
            names: {
                // name of each serie
                data1: "A",
                data2: "B",
                data3: "C",
                data4: "D",
            }
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
