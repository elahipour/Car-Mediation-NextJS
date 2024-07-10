import carsData from '../../data/carsData';
import Cars from '../../components/templates/Cars'
function index() {
  return (
   <><Cars data={carsData}/></> 
  )
}

export default index