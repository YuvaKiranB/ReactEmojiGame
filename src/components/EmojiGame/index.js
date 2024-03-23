import './index.css'

import {Component} from 'react'

import GetNavBar from '../NavBar'

import GetCard from '../EmojiCard'

import GetScoreCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {emojiList: [], gameState: 'progress', score: 0, topScore: 0}

  cardClicked = id => {
    const {emojiList, score, topScore} = this.state

    if (emojiList.includes(id)) {
      this.setState({gameState: 'end'})
    } else {
      this.setState(previousState => ({
        emojiList: [...previousState.emojiList, id],
        score: previousState.score + 1,
      }))
      if (score >= topScore) {
        this.setState({topScore: score + 1})
      }
      if (score === 11) {
        this.setState({gameState: 'end'})
      }
    }
  }

  reset = () => {
    this.setState({gameState: 'progress', emojiList: [], score: 0})
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const {gameState, score, topScore} = this.state

    return (
      <div className="main">
        <GetNavBar score={score} topScore={topScore} gameState={gameState} />

        <div className="gameContainer">
          {gameState === 'progress' ? (
            <ul className="cardsContainer">
              {shuffledEmojisList().map(eachItem => (
                <GetCard
                  clickedCard={this.cardClicked}
                  key={eachItem.id}
                  content={eachItem}
                />
              ))}
            </ul>
          ) : (
            <div className="div">
              <GetScoreCard score={score} clickedPlay={this.reset} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
