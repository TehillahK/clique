import Login from "../components/Login";
import Navbar from "../components/Navbar";
import LoanData from "../components/LoanData";
const Register = (props) => {
    return ( 
        <div>
            <Navbar />
            <section className="container" style={{marginBottom:"5rem"}}>
                 <div className="row">
                    <div className="col-sm" style={{marginBottom:"1rem"}}>
                        <LoanData />
                    </div>
                    <div className="col-sm" style={{marginBottom:"1rem"}}>
                        <Login />
                    </div>  
                   
                   
                 </div>
                 
             </section>
        </div>
     );
}
 
export default Register;