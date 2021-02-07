import React from "react"
import PropTypes from "prop-types"
import { Page, Card, Form, Button } from "tabler-react"
class AddCategory extends React.Component {
  render () {
    return (
      <React.Fragment>
            <Form method='POST' action="/v1/categories" onSubmit={(event) => alert(event.target.name + 'clicked')}>
                <Page.Card
                    title="New Category"
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
              <Form.Input name='name' label='Name' placeholder='Enter category name' />
              <Form.Input className="mb-3" icon="percent" name='goal' label='Goal' placeholder='Enter category goal %' position="append" />
                </Page.Card>
            </Form>
      </React.Fragment>
    );
  }
}

export default AddCategory
