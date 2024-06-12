import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import { lodging } from '../datas/lodging.js';
import Error from '../components/Error.jsx';


function LodgingPage() {
    const {id} = useParams() 
    let currentLodging = lodging.filter((lodge) => {
        return lodge.id === id
    })
    if(currentLodging.length === 0)
        {
            return <Error/>
        }
        currentLodging= currentLodging[0];  
        return (
    <Carrousel pictures={currentLodging.pictures}/>
    //TITRE et LOCALISATION
    //TAG
    //NOTATION et HOTE
    //COLLAPSE
  );
}

export default LodgingPage;
