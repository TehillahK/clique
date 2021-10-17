import Calculator from "../components/Calculator";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
const Home = () => {
    return ( 
        <div>
             <Navbar />
             <section className="container">
                 <div className="container-fluid">
                     <div className="d-flex flex-row justify-content-end">
                        <Calculator />
                     </div>
                   
                 </div>
                 
             </section>
             <section className="container-fluid">
                 <div className="d-flex  justify-content-center">
                    <Services />
                 </div>
                 
             </section>
        </div>
     );
}
 
export default Home;