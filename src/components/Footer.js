import { Link } from "react-router-dom";
function Links(){
    return(

        <div className="links text-white d-md-flex  mb-3  justify-content-evenly align-items-md-center">
            
            <div className="d-flex flex-column">
                <h6>PRODUCTS</h6>
                <Link >Salary</Link>
                <Link >Collateral Backed Loan</Link>
                <Link >Instant Loans</Link>
            </div>
            <div className="d-flex flex-column">
                <h6>USEFUL LINKS</h6>
            </div>
            <div className="d-flex flex-column">
                <h6>CONTACT</h6>
            </div>
        </div>
    )
}
const Footer = () => {
    return ( 
        <footer className="d-flex flex-column bg-dark">
            <Links />
            <div className=" copy-right-line">
                <p className="d-flex justify-content-center  fw-lighter ">&copy; 2022 Clique Finance All rights reserved </p>
            </div>
        </footer>
     );
}
 
export default Footer;