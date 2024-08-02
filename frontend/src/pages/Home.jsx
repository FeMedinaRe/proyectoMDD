import Navbar from '../components/Navbar'
import AsistenciaComponent from '../components/updateAsistencia.jsx'
import AsistentesList from '../components/verAsistencia.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className = "container1">
        <AsistenciaComponent/> {}
        <AsistentesList/> {}
      </div>
    </>
  )
}

export default Home
