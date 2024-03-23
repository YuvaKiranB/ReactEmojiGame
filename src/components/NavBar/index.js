// Write your code here.
import './index.css'

const GetNavBar = props => {
  const {score, topScore, gameState} = props

  return (
    <div className="NavBar">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logoImg"
        />
        <h1 className="logoName">Emoji Game</h1>
      </div>
      {gameState === 'progress' ? (
        <div className="scoreContainer">
          <p className="score">Score: {score}</p>
          <p className="topScore">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default GetNavBar
