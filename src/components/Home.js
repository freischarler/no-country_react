import  NavbarComponent  from "./Navbar"
import Jumbotron from "./Jumbotron"
import Footer from "./Footer"

function Home () {
  return (
    <>
        <NavbarComponent className="navbar"/>
          <Jumbotron/>
          <Footer/>
    </>
  )
}

export default Home;