import React from "react";
import { Form, } from "semantic-ui-react";

class CardForm extends React.Component {
  state = { front: " ", back: " ", frontShown: true, };

componentDidMount = () => { 
  if (this.props.id)
  this.setState({ front: this.props.front, back: this.props.back})
}

  handleSubmit = (e) => {
  e.preventDefault();
  if(this.props.id) {
    this.props.edit({id: this.props.id, ...this.state})};
  this.props.add(this.state);
  this.setState({ front: "", back: "", });
}

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value, });
};

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
      <Form.Group widths="equal">
      <Form.Input
      fluid
      label="Front"
      placeholder="Front"
      name="front"
      value={this.state.front}
      onChange={this.handleChange}
      />
      <Form.Input
      fluid
      label="Back"
      placeholder="Back"
      name="back"
      value={this.state.back}
      onChange={this.handleChange}
      />
      <Form.Button onSubmit={this.handleSubmit}>Submit</Form.Button>
      </Form.Group>
      </Form>
    )
  }
}

export default CardForm;