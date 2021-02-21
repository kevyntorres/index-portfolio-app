import React from "react"
import {Button, Card, Form, Page} from "tabler-react";
class NewItem extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isin: '',
      price: '',
      item_type: '',
      category_id: null,
      categories: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('/v1/categories')
        .then(response => response.json())
        .then(data => {
          this.setState({
            categories: data
          })
        });
  }

  assetsItems(items) {
    return (
        items.map(item=> <option key={item.id} value={item.id}>{item.name}</option>)
    )
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
          <Form>
            <Page.Card
                title="New Asset"
                footer={
                  <Card.Footer>
                    <div className="d-flex">
                      <Button type="button" id="cncButton" onClick={this.props.handleNewButton}>Cancel</Button>
                      <Button type="button" id="svButton" onClick={() => this.props.saveButton(this.state)} icon="check" color="primary" className="ml-auto">
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
              <Form.Select
                className="mb-3"
                name='category_id'
                label='Category'
                onChange={this.handleChange}
                value={this.state.category_id}>
                  {this.assetsItems(this.state.categories)}
              </Form.Select>
            </Page.Card>
          </Form>
        </React.Fragment>
    );
  }
}

export default NewItem
