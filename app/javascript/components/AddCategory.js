import React from "react"
import PropTypes from "prop-types"
import { Page, Card, Form, Button } from "tabler-react"
class AddCategory extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            goal: ""
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
            <Form>
                <Page.Card
                    title="New Category"
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
                  <Form.Input name='name' label='Name' placeholder='Enter category name' value={this.state.name} onChange={this.handleChange} />
                  <Form.Input className="mb-3" icon="percent" name='goal' label='Goal' value={this.state.goal} onChange={this.handleChange} placeholder='Enter category goal %' position="append" />
                </Page.Card>
            </Form>
      </React.Fragment>
    );
  }
}

export default AddCategory
