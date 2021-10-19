import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';
const UserLogin = () => {
    return ( 
        <form className={'card'} style={{width:"20rem"}}>
            <div className="card-body">
                <div className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faUserCircle} size="6x"  />
                </div>
                <div class="mb-3 mt-3">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div class="mb-3">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-evenly">
                        <button type="button">Login</button>
                        <button type="button">Forgot password</button>
                    </div>
                    <div className="d-flex justify-content-around">
                        <p>Dont have an account?</p>
                        <Link to={'/register'}>Register</Link>
                    </div>
                </div>
            </div>
        </form>
     );
}
 
export default UserLogin;