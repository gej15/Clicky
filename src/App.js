import React, { Component } from "react";
import friends from "./friends.json";
import Card from "./components/Card";
import Title from "./components/Title"
import Wrapper from "./components/Wrapper"
import Top from "./components/Top"
// import FriendCard from "./components/FriendCard"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    clickedOn: [],
    order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    friends,
    score: 0,
    topscore: 0,
    text: "Don't click on the same card twice!"
  };

  

 rearange = event => {
   event.preventDefault(); 
   let targetId = event.target.id
   console.log(targetId)
   console.log('rearange go')
   let tempOrder = []
   while (this.state.friends.length > tempOrder.length) {
    let number = Math.floor(Math.random() * this.state.friends.length);
    if (tempOrder.indexOf(number) < 0) {
      tempOrder.push(number);
    }
  }
   this.setState({order: tempOrder}) 
   if (this.state.clickedOn.indexOf(event.target.id) < 0) {
    this.state.clickedOn.push(targetId) 
    this.setState({
      score: this.state.score + 1,
      text: "Good guess, go again"
    })
    console.log(this.state.score)
    if (this.state.score === this.state.topscore) {
      this.setState({
        topscore: this.state.score + 1        
      })
    }
    if (this.state.score === 11 ) {
      this.setState({
        score: 0,
        clickedOn: [],
        order: [0,1,2,3,4,5,6,7,8,9,10,11],
        text: "YOU WIN!"
      })
    }
    
   } else {
     this.setState({
       score: 0,
       clickedOn: [],
       order: [0,1,2,3,4,5,6,7,8,9,10,11],
       text: "Loser, Try Again"
     })
   }
   

   
   console.log(this.state.clickedOn)

   
   
  //  clickedOn.push(this.state.card.id)
  

 }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Top score={this.state.score} topscore={this.state.topscore} text={this.state.text}
       />
      <Wrapper>
        <Title>X Men Memory Game</Title>
        {this.state.order.map(i => (
          <Card
            clickFunction={this.rearange}
            id={this.state.friends[i].id}
            key={this.state.friends[i].id}
            name={this.state.friends[i].name}
            image={this.state.friends[i].image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;


