import Navbar from "../components/Navbar";
import UserLogin from "../components/UserLogin";

const SignIn = () => {
    return (
        <div>
        <Navbar />
        <section className="container" style={{marginBottom:"5rem"}}>
        <div className="container-fluid">
             <div className="d-flex flex-row justify-content-end">
                <UserLogin />   
             </div>
        </div>
         </section>
    </div>
      );
}
 
export default SignIn;