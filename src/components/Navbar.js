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
            <NavLinks  />
        </div>
    )
}
function NavItems(){
    return(
        <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end ">
                <li className="nav-item dropdown">
                    <Link to="/"  className="nav-link dropdown-toggle" aria-expanded="false" role="button" data-bs-toggle="dropdown" >Services</Link>
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
                    <Link className="nav-link active" to="" >Sign in</Link>
               </li>
               <li class="nav-item">
                    <Link to={'/'} className="btn btn-primary">Contact us</Link>
               </li>
            </ul>
           
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
    <nav className="navbar  navbar-expand-lg navbar-light d-flex justify-content-center ">
        <div className="container">
            <div className="d-md-flex flex-row justify-content-center">
                <NavLogo />
                <ToggleButton />
            </div>  
                <Buttons />
        </div>
    </nav>
  );
};

export default Navbar;
