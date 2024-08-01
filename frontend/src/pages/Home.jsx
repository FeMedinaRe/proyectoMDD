import Navbar from '../components/Navbar'
import AsistenciaComponent from '../components/updateAsistencia.jsx'
import AsistentesList from '../components/verAsistencia.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className = "container">
        <AsistenciaComponent/> {}
      </div>
      <div className = "container">
        <AsistentesList/> {}
      </div>
    </>
  )
}

export default Home
