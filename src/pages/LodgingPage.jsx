import { useParams } from 'react-router-dom'
import Carrousel from '../components/Carrousel'
import { lodging } from '../datas/lodging.js'
import Error from '../components/Error'
import LodgingInfo from '../components/LodgingInfo'
import Tag from '../components/Tag'
import Rate from '../components/Rate'
import Host from '../components/Host'
import Collapse from '../components/Collapse'

function LodgingPage() {
  const { id } = useParams()
  let currentLodging = lodging.filter((lodge) => {
    return lodge.id === id
  })
  if (currentLodging.length === 0) {
    return <Error />
  }
  currentLodging = currentLodging[0]
  return (
    <div>
      <Carrousel pictures={currentLodging.pictures} />
      <LodgingInfo
        title={currentLodging.title}
        location={currentLodging.location}
      />
      <Tag tags={currentLodging.tags} />
      <div className="wrap">
        <Rate rate={currentLodging.rate} />
        <Host host={currentLodging.host} />
      </div>
      <div className="lodging-collapse">
        <Collapse
          props={{
            aboutTitle: 'Description',
            aboutText: currentLodging.description,
          }}
        />
        <Collapse
          props={{
            aboutTitle: 'Équipements',
            aboutText: currentLodging.equipments,
          }}
        />
      </div>
    </div>
  )
}

export default LodgingPage
