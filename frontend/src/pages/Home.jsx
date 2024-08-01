import Navbar from '../components/Navbar'
import AsistenciaComponent from '../components/updateAsistencia.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className = "container">
        <AsistenciaComponent/> {}
      </div>
    </>
  )
}

export default Home
