import React from "react"
import {Button, Card, Form, Page} from "tabler-react";
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
        <React.Fragment>
          <Form>
            <Page.Card
                title="New Operation"
                footer={
                  <Card.Footer>
                    <div className="d-flex">
                      <Button type="button" id="cncButton">Cancel</Button>
                      <Button type="button" id="svButton" icon="check" color="primary" className="ml-auto">
                        Save
                      </Button>
                    </div>
                  </Card.Footer>
                }
            >
              <Form.Select
                  className="mb-3"
                  name='item_id'
                  label='Item'
                  onChange={this.handleChange}
                  value={this.state.item_id}>
                {this.assetsItems(this.state.items)}
              </Form.Select>
                <Form.Select
                    className="mb-3"
                    name='operations_type'
                    label='Type'
                    onChange={this.handleChange}
                    value={this.state.item_id}
                >
                    <option value="Sell">Sell</option>
                    <option value="Buy">Buy</option>
                </Form.Select>
              <Form.Group label='Tax'>
              <Form.InputGroup>
                <Form.InputGroupPrepend>
                  <Form.InputGroupText>
                    $
                  </Form.InputGroupText>
                </Form.InputGroupPrepend>
                <Form.Input
                  name='tax'
                  value={this.state.tax}
                  onChange={this.handleChange}
                />
                <Form.InputGroupAppend>
                  <Form.InputGroupText>
                    .00
                  </Form.InputGroupText>
                </Form.InputGroupAppend>
              </Form.InputGroup>
              </Form.Group>
              <Form.Group label='Price'>
              <Form.InputGroup>
                <Form.InputGroupPrepend>
                  <Form.InputGroupText>
                    $
                  </Form.InputGroupText>
                </Form.InputGroupPrepend>
                <Form.Input
                    name='price'
                    value={this.state.price}
                    onChange={this.handleChange}
                />
                <Form.InputGroupAppend>
                  <Form.InputGroupText>
                    .00
                  </Form.InputGroupText>
                </Form.InputGroupAppend>
              </Form.InputGroup>
              </Form.Group>
              <Form.Input
                  name='quantity'
                  label='Quantity'
                  type="number"
                  min="1"
                  value={this.state.quantity}
                  onChange={this.handleChange}
              />
              <Form.Input
                  name='platform'
                  label='Platform'
                  value={this.state.platform}
                  onChange={this.handleChange}
              />
              <Form.Group label='Operated at'>
              <Form.DatePicker
                  name='operated_at'
                  value={this.state.operated_at}
                  onChange={this.handleChange}
                  defaultDate={new Date("2021-02-11T22:55:22.889Z")}
                  format="mm/dd/yyyy"
                  maxYear={2021}
                  minYear={1897}
                  monthLabels={[
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                  ]}
              />
              </Form.Group>
            </Page.Card>
          </Form>
        </React.Fragment>
    );
  }
}

export default AddOperation
