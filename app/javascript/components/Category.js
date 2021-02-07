import React from "react"
import PropTypes from "prop-types"
import {Page, Button, Card, Form, Nav, Grid} from "tabler-react"
import CategoryView from "./CategoryView";
class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch('/v1/categories')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data
                })
            });
    }

    categoryItems(items) {
        return (
            items.map(cat=> <CategoryView key={cat.id} data={cat} />)
        )
    }
    render () {

        return (
          <React.Fragment>
            <Page.Content>
                <Page.Card
                    title="Categories"
                    footer={
                        <Card.Footer>
                            <div className="d-flex">
                                <Button color="primary" icon="plus" RootComponent="a" href="/categories/new" className="ml-auto">
                                    Add new
                                </Button>
                            </div>
                        </Card.Footer>
                    }
                >
                    <Grid.Row cards={true}>
                    { this.categoryItems(this.state.data)}
                    </Grid.Row>
                </Page.Card>
            </Page.Content>
          </React.Fragment>
        );
     }
}

export default Category
