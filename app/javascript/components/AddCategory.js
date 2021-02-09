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
                                <Button id="cncButton" onClick={this.props.handleNewButton}>Cancel</Button>
                                <Button id="svButton" onClick={this.props.saveButton(this.state.name)} icon="check" color="primary" className="ml-auto">
                                    Save
                                </Button>
                            </div>
                        </Card.Footer>
                    }
                >
              <Form.Input name='name' label='Name' placeholder='Enter category name' />
              <Form.Input className="mb-3" icon="percent" name='goal' label='Goal' placeholder='Enter category goal %' position="append" />
                </Page.Card>
            </Form>
      </React.Fragment>
    );
  }
}

export default AddCategory
