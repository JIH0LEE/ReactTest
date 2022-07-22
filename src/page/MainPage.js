import './style.css'
import { Button } from 'react-bootstrap'

function MainPage() {
  return (
    <div className="main-page">
      <div className="title">구르미</div>
      <div className="body-container">
        <Button className="start-button">시작하기</Button>
      </div>
    </div>
  )
}
export default MainPage
