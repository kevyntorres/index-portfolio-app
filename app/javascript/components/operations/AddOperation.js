import React from "react"
import { Form, Button, Card } from "react-bootstrap";
class AddOperation extends React.Component {
  constructor() {
    super();
    this.state = {
      item_id: null,
      operations_type: "",
      tax: null,
      quantity: null,
      price: null,
      platform: "",
      operated_at: null,
      items: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('/v1/items')
        .then(response => response.json())
        .then(data => {
          this.setState({
            items: data
          })
        });
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  assetsItems(items) {
    return (
        items.map(item=> <option value={item.id}>{item.name}</option>)
    )
  }

  render () {
    return (
          <Form>
            <Card className="mt-4">
                <Card.Header className="bg-white">New Operation</Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Label>Item</Form.Label>
                        <Form.Control
                            as="select"
                            className="mb-3"
                            name='item_id'
                            onChange={this.handleChange}
                            value={this.state.item_id}
                        >
                            {this.assetsItems(this.state.items)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            as="select"
                            className="mb-3"
                            name='operations_type'
                            label='Type'
                            onChange={this.handleChange}
                            value={this.state.item_id}
                        >
                            <option value="Sell">Sell</option>
                            <option value="Buy">Buy</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tax</Form.Label>
                        <Form.Control
                            className="mb-3"
                            name='tax'
                            value={this.state.tax}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            className="mb-3"
                            name='price'
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            name='quantity'
                            type="number"
                            min="1"
                            value={this.state.quantity}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Platform</Form.Label>
                        <Form.Control
                            type="input"
                            name='platform'
                            label='Platform'
                            value={this.state.platform}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Operated at</Form.Label>
                        <Form.Control
                            type="date"
                            name='operated_at'
                            value={this.state.operated_at}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex">
                        <Button type="button" id="cncButton" variant="default" onClick={this.props.handleNewButton}>Cancel</Button>
                        <Button type="button" id="svButton" onClick={() => this.props.saveButton(this.state)} icon="check" variant="primary" className="ml-auto">
                            Save
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
          </Form>
    );
  }
}

export default AddOperation
