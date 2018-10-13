import React,{Component} from 'react';
import clickCards from './clickCards';
import Card from './cards';


class GameContainer extends Component{

    state = {
        cards: clickCards,
        score: 0
    };

    handleClick = (color)=>{
        const newState = this.state.cards.map(card => {
            if (card.color === color && card.clicked===false){
                card.clicked = true;
                this.setState({ score: this.state.score+1})
            } else if(card.clicked === true){
                console.log('card already clicked')
                this.setState({score: this.state.score=0})
            }
            return card;
        })
        this.setState({cards:this.shuffleArray(newState)})
    }

    shuffleArray = (arr)=>{
        for(let i = arr.length-1; i>0; i--){
            const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j],arr[i]]
        }
        return arr;
    }


    render(){
        console.log(this.state.cards);
        return (
            <div>
                <h1>Score: {this.state.score}</h1>
                {this.state.cards.map(card=>{
                    return (
                        <Card key = {card.color} 
                        clicked = {card.clicked}
                        handleClick={this.handleClick} 
                        id={this.props.color} 
                        color={card.color}/>
                    )
                })}
            </div>
        )
    }
}

export default GameContainer;