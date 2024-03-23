// Write your code here.
import './index.css'

const GetCard = props => {
  const {clickedCard, content} = props
  const {id, emojiName, emojiUrl} = content

  const clicked = () => {
    clickedCard(id)
  }

  return (
    <li className="emojiCard">
      <button type="button" onClick={clicked} className="button1">
        <img className="image1" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default GetCard
