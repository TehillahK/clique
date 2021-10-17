import Login from "../components/Login";
import Navbar from "../components/Navbar";

const Register = (props) => {
    return ( 
        <div>
            <Navbar />
            <section className="container">
                 <div className="container-fluid">
                     <div className="d-flex flex-row justify-content-center">
                        <Login />
                    
                     </div>
                   
                 </div>
                 
             </section>
        </div>
     );
}
 
export default Register;