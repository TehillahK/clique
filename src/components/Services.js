import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
function Text(){
    return(
        <div style={{textAlign:"center"}}>
            <h1 className="fs-6 text-muted">What Were offering</h1>
            <h2 className="fs-2">All Loans Services</h2>
        </div>
    )
}
function Cards(){
    return(
        <div className={"d-md-flex  justify-content-between mb-3 home"}>
           <div className="card shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <h3 className="card-title">Salary Advances</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to='/'><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                </div>
           </div>
           <div className="card shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <h3 className="card-title">Collateral Backed</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to='/'><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                </div>
           </div>
           <div className="card shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <h3 className="card-title">Instant Loans</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to='/'><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                </div>
           </div>
        </div>
    )
}

function Buttons(){
    return(
        <div className="service-links" style={{justifyContent:"space-around"}}> 
            <Link to='/'>Salary advances</Link>
            <Link to='/'>Collateral Backed</Link>
            <Link to='/'>instant loans</Link>
        </div>
    )
}
const Services = () => {
    return ( 
        <div className={'d-flex flex-column justify-content-center'}> 
            <Text />
            <div className="container-fluid">
                <Cards />
            </div>
        </div>
     );
}
 
export default Services;