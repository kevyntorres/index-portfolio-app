import React from "react"
import PropTypes from "prop-types"
import { Card, colors } from 'tabler-react'
import C3Chart from "react-c3js";
import 'c3/c3.css';
class CategoryGraph extends React.Component {
    constructor() {
        super();
        this.state = {
            columns: [],
            names: {}
        }
    }

    componentDidMount() {
        let columns = []
        let obj = {}
        let total = 0
        columns = this.props.data.map((cat => {
            total += parseInt(cat.goal)
            return [cat.id, cat.goal]
        }))
        this.props.data.map((cat => {
            total += parseInt(cat.goal)
            return obj[cat.id] = cat.name
        }))
        if (parseInt(total) < 100){
            columns.push(['empty', 100-total])
            obj['empty'] = 'Empty'
        }
        this.setState({
            columns: columns,
            names: obj
            }
        )
    }

    render () {
        console.log(this.props)
        const data = {
            columns:
               this.state.columns
            ,
            type: "pie", // default type of chart,
            names: this.state.names
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
