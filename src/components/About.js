import  NavbarComponent  from "./Navbar"
import Footer from "./Footer"
import goLogo from '../assets/go.png';

function About () {
  return (
    <>
    <NavbarComponent className="navbar"/>
          
        <div className="about-section paddingTB60 gray-bg">
    <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-6">
            <div className="about-title clearfix">
              <h1>Contactos de <span>Recetas faciles!</span></h1>
              <h3 className="mb-2">Sitio web hecho por juniors!</h3>
              <p className="about-paddingB"></p>
                
                <div className="about-icons"> 
                  <ul >
                    <li><a href="https://es.reactjs.org/" ><i id="social-react" className="fab fa-react mr-3"></i></a> </li>
                    <li> <a href="https://www.postgresql.org/"><i id="social-gp" className="fas fa-database"></i></a> </li>
                    <li><a href="https://go.dev/"><img src={goLogo} style={{maxWidth:"50px", marginBottom:"15px"}}/></a></li>
                  </ul>       
                </div>


                <hr></hr>
                <p><a href="mailto:es@rf.com?Subject=Consulta" className="text-decoration-none">Erika Belen Sandoval</a></p>
                <p><a href="mailto:jp@rf.com?Subject=Consulta" className="text-decoration-none">Julian Perna</a></p>
                <p><a href="mailto:mp@rf.com?Subject=Consulta" className="text-decoration-none">Martin Paz</a></p>
                <p><a href="mailto:rl@rf.com?Subject=Consulta" className="text-decoration-none">Robert Linares</a></p>
                
                <div className="about-icons"> 
                  <ul >
                    <li><a href="https://www.facebook.com/"><i id="social-fb" className="fab fa-facebook-square fa-3x social"></i></a> </li>
                    <li><a href="https://twitter.com/"><i id="social-tw" className="fab fa-twitter-square fa-3x social"></i></a> </li>
                    <li> <a href="https://plus.google.com/"><i id="social-gp" className="fab fa-google-plus-square fa-3x social"></i></a> </li>
                    <li> <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a> </li>
                  </ul>       
                </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-6">
            <div className="about-img">
              <img src="https://devitems.com/preview/appmom/img/mobile/2.png" alt=""></img>
          </div>
        </div>	
      </div>
      </div>
    </div>
          <Footer/>
    </>
  )
}

export default About;