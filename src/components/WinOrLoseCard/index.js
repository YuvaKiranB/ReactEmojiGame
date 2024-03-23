// Write your code here.

import './index.css'

const GetScoreCard = props => {
  const {score, clickedPlay} = props

  const reset = () => {
    clickedPlay()
  }

  if (score === 12) {
    return (
      <div className="scoreCardFinal">
        <div className="scoreFinal">
          <h1 className="win">You Won</h1>
          <p className="bestScore">Best Score</p>
          <p className="score2">12/12</p>
          <button onClick={reset} className="button2" type="button">
            Play Again
          </button>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="winLogo"
        />
      </div>
    )
  }

  return (
    <div className="scoreCardFinal">
      <div className="scoreFinal">
        <h1 className="win">You Lose</h1>
        <p className="bestScore">Score</p>
        <p className="score2">{score}/12</p>
        <button onClick={reset} className="button2" type="button">
          Play Again
        </button>
      </div>

      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="winLogo"
      />
    </div>
  )
}

export default GetScoreCard
