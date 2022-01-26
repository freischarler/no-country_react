import RecipeUser from './RecipeUser';
import  NavbarComponent  from "./Navbar"
import Footer from "./Footer"

function Panel () {
  return (
    <><div>
    <NavbarComponent className="navbar"/>
    <RecipeUser />
    <Footer />
  </div>
  </>
  );
};

export default Panel;
