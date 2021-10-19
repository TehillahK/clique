import Navbar from "../components/Navbar";
import UserLogin from "../components/UserLogin";

const SignIn = () => {
    return (
        <div>
        <Navbar />
        <section className="container" style={{marginBottom:"5rem"}}>
             <UserLogin />   
         </section>
    </div>
      );
}
 
export default SignIn;