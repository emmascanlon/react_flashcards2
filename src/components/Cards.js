import React from "react";
import {Container, Segment, Form, Icon, Grid, Button, } from "semantic-ui-react"
import CardForm from './CardForm'
import Card from './Card'

class Cards extends React.Component {
  state = {
    cards: [
      {id: 1, front: "2+2", back: 4},
      {id: 2, front: "2+3", back: 5},
      {id: 3, front: "2+4", back: 6},
      {id: 4, front: "2+5", back: 7},
      {id: 5, front: "2+6", back: 8},
      {id: 6, front: "2+7", back: 9},
    ],
    showForm: false,
   }
   getId = () => {
    return Math.floor((1 + Math.random()) * 10000); 
  };

  editCard = (cardData) => {
    const cards = this.state.cards.map( card => {
      if (card.id ===cardData.id)
      return cardData;
      return card});
      this.setState({ cards, })
    }

   removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
      return card
    });
      this.setState({ cards: [...cards], });
    };

   addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData, };
    this.setState({ cards: [card, ...this.state.cards], });
  };

  renderCards = () => {
    return this.state.cards.map( card => <Card key={card.id} {...card} edit={this.editCard} />)
  }

   toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  render () {
    const {cards, showForm} = this.state
    return (
     
      <div>
        <Button Icon color="blue" onClick={this.toggleForm}>
        <Icon name= "double angle down"/>
        </Button>
        {showForm ? <CardForm add={this.addCard} /> : null}
      <h1>Flashcards</h1>
      {this.renderCards() }
      </div>
      )
    }
  }
       
  

export default Cards;