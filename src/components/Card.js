import React from "react";
import { Header, Segment, Button, Icon} from "semantic-ui-react";
import CardForm from './CardForm'

class Card extends React.Component {
  state = {editing: false, showAnswer: false};

  toggleEdit = () => this.setState({ editing: !this.state.editing, });
  
  toggleAnswer = () => this.setState({ showAnswer: !this.state.showAnswer, });
  render() {
    return (
      <Segment style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
        {
          this.state.editing ?
          <CardForm { ...this.props } toggleEdit={this.toggleEdit} /> :
          <div>
            <Header as="h3">{this.props.front}</Header> {this.state.showAnswer? 
            <p>{this.props.back}</p> : null}
          </div>
        }
        <div>
          <Button icon color="green" onClick={this.toggleAnswer}>
            <Icon name="eye" />
          </Button>
          <Button icon color="blue" onClick={this.toggleEdit}>
            <Icon name="pencil" />
          </Button>
          <Button icon color="red">
            <Icon name="trash" />
          </Button>
          
        </div>
      </Segment>
    )
  }
}

export default Card;