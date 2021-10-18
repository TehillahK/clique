import { Link } from "react-router-dom";
import Logo from "../assets/logos/logo-transparent.png"
function NavLogo(){
    return(
        <Link className="navbar-brand" to={'/'}>
            <img src={Logo} alt={'clique logo'} style={{width:"10rem"}} />
        </Link>
    )
}
function Search(){
    return(
        <form className="d-flex">
            <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
            Search
            </button>
      </form>
 
    )
}
function ToggleButton(){
    return(
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    )
}
function Buttons(){
    return(
        <div className="d-flex center">
            <Link>Sign in</Link>
            <Link to={'/'} className="btn btn-primary">Contact us</Link>
        </div>
    )
}
function NavItems(){
    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link to={'/'} className="nav-link active" aria-current="page" >Home</Link>
                </li>
                <li className="nav-item dropdown">
                    <a href="#"  className="nav-link dropdown-toggle" aria-expanded="false" role="button" data-bs-toggle="dropdown" >Services</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <Link to={'/'} className="nav-link active" aria-current="page" >Service #1</Link>
                            <Link to={'/'} className="nav-link active" aria-current="page" >Service #2</Link>
                            <Link to={'/'} className="nav-link active" aria-current="page" >Service #3</Link>
  
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <Link to={'/'} className="nav-link active" aria-current="page" >About us</Link>
                </li>
                <li class="nav-item">
                    <Search />
                </li>
            </ul>
            <Buttons />
        </div>
    )
}
function NavLinks() {
  return (
    <div className="container">
      
      <NavItems />
    </div>
   
  );
}
const Navbar = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light ">
        <div className="container">
            <NavLogo />
            <ToggleButton />
            <NavLinks />
        </div>
    </nav>
  );
};

export default Navbar;
