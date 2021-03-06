import React from "react"
import {Card, Button, Form} from "react-bootstrap";
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
            <Card className="mt-4">
              <Card.Header className="bg-white">New Asset</Card.Header>
              <Card.Body>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                      type="input"
                      name='name'
                      placeholder='Enter asset name'
                      onChange={this.handleChange}
                      value={this.state.name}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>ISIN</Form.Label>
                  <Form.Control
                      type="input"
                      name='isin'
                      placeholder='Enter ISIN'
                      onChange={this.handleChange}
                      value={this.state.isin}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                      type="input"
                      name='price'
                      placeholder='Enter price'
                      onChange={this.handleChange}
                      value={this.state.price}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                      type="input"
                      name='item_type'
                      placeholder='Enter type'
                      onChange={this.handleChange}
                      value={this.state.item_type}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                      as="select"
                      name='category_id'
                      onChange={this.handleChange}
                      value={this.state.category_id}
                  >
                    {this.assetsItems(this.state.categories)}
                  </Form.Control>
                </Form.Group>
              </Card.Body>
                  <Card.Footer className="bg-white">
                    <div className="d-flex">
                      <Button type="button" id="cncButton" variant="default" onClick={this.props.handleNewButton}>Cancel</Button>
                      <Button type="button" id="svButton" onClick={() => this.props.saveButton(this.state)} variant="primary" className="ml-auto">
                        Save
                      </Button>
                    </div>
                  </Card.Footer>
            </Card>
          </Form>
        </React.Fragment>
    );
  }
}

export default NewItem
