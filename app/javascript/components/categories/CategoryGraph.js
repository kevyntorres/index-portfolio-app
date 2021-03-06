import React from "react"
import { Card } from 'react-bootstrap'
import C3Chart from "react-c3js";
import 'c3/c3.css';
class CategoryGraph extends React.Component {
    constructor() {
        super();
        this.state = {
            columns: [],
            names: {},
            data: []
        }
    }

    componentDidMount() {
        fetch('/v1/categories')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data
                })
            });
    }

    columns(){
        return (
            this.state.data.map((cat => {
            return [cat.id, cat.goal]
        })))
    }

    names(){
        let obj = {}
        this.state.data.map((cat => {
            return obj[cat.id] = cat.name
        })
        )
        return obj
    }

    colors(){
        let obj = {}
        let i = 4
        let colors_array = [ "#ecf7fe", "#7dc4f6", "#45aaf2", "#3788c2", "#0e2230" ]
        this.state.data.map((cat => {
                i--
                i<0 ? i=5 : i
                return obj[cat.id] = colors_array[i]
            })
        )
        return obj
    }

    render () {

        const data = {
            columns:
               this.columns()
            ,
            type: "pie", // default type of chart,
            colors: this.colors(),
            names: this.names()
        }


    return (
      <React.Fragment>
        <Card>
          <Card.Header className="bg-white">
            <Card.Title>Categories Goals %</Card.Title>
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
