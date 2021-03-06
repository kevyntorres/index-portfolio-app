import React from "react"
import { Form, Button, Card } from "react-bootstrap"
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
        <Form>
            <Card className="mt-4">
                <Card.Header className="bg-white">New Category </Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            type="input"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />

                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Goal</Form.Label>
                        <Form.Control
                            className="mb-3"
                            type="number"
                            name='goal'
                            min="0"
                            max="100"
                            value={this.state.goal}
                            onChange={this.handleChange}
                            placeholder='Enter category goal %'
                        />
                    </Form.Group>
                </Card.Body>
                <Card.Footer className="bg-white">
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

export default AddCategory
