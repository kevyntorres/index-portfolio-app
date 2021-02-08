import React from "react"
import PropTypes from "prop-types"
import {Button, Card, Form, Page} from "tabler-react";
class NewItem extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isin: '',
      price: '',
      item_type: '',
      category_id: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  render () {
    return (
        <React.Fragment>
          <Form method='POST' action="/v1/items" onSubmit={(event) => alert(event.target.name + 'clicked')}>
            <Page.Card
                title="New Asset"
                footer={
                  <Card.Footer>
                    <div className="d-flex">
                      <Button link>Cancel</Button>
                      <Button icon="check" color="primary" type='submit' value='Submit' className="ml-auto">
                        Save
                      </Button>
                    </div>
                  </Card.Footer>
                }
            >
              <Form.Input
                  name='name'
                  label='Name'
                  placeholder='Enter asset name'
                  onChange={this.handleChange}
                  value={this.state.name}
              />
              <Form.Input
                  className="mb-3"
                  name='isin'
                  label='ISIN'
                  placeholder='Enter ISIN'
                  onChange={this.handleChange}
                  value={this.state.isin}
              />
              <Form.Input
                  className="mb-3"
                  name='price'
                  label='Price'
                  placeholder='Enter price'
                  onChange={this.handleChange}
                  value={this.state.price}
              />
              <Form.Input
                  className="mb-3"
                  name='item_type'
                  label='Type'
                  placeholder='Enter type'
                  onChange={this.handleChange}
                  value={this.state.item_type}
              />
              <Form.Input
                  className="mb-3"
                  type={"number"}
                  name='category_id'
                  label='Category'
                  placeholder='Enter category'
                  onChange={this.handleChange}
                  value={this.state.category_id}
              />
            </Page.Card>
          </Form>
        </React.Fragment>
    );
  }
}

export default NewItem
