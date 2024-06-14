import { collapseAboutPage } from '../datas/collapseAboutPage.js'
import '../styles/_collapse.scss'
import Collapse from './Collapse.jsx'

function CollapseAbout() {
  return (
    <div className="collapse-container">
      {collapseAboutPage.map((index) => (
        <Collapse key={index.id} props={index} />
      ))}
    </div>
  )
}

export default CollapseAbout
