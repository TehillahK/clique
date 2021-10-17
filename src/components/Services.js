import { Link } from "react-router-dom";
const Services = () => {
    return ( 
        <div className="service-links" style={{justifyContent:"space-around"}}> 
            <Link to='/'>Salary advances</Link>
            <Link to='/'>Collateral Backed</Link>
            <Link to='/'>instant loans</Link>
        </div>
     );
}
 
export default Services;