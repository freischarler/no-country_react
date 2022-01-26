import  NavbarComponent  from "./Navbar"
import CardRecipe from "./CardRecipe"
import Footer from "./Footer"

function Home () {
  return (
    <>
        <NavbarComponent className="navbar"/>
        <div className="container mb-5">
        
        </div>
        <CardRecipe />
        <Footer/>
    </>
  )
}

export default Home;