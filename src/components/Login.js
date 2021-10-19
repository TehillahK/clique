const Login = (props) => {
    return (
        <div className={'card'}>
                <div className="card-header">
                  <h2>Register</h2>
                </div>
                <form className={'card-body'}>
                <div class="mb-3 mt-3">
                        <label for="text">NRC Number</label>
                        <input type="text" class="form-control" id="name" placeholder="First Name" name="First Name" />
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="text">First Name:</label>
                        <input type="text" class="form-control" id="name" placeholder="First Name" name="First Name" />
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="text">Last Name:</label>
                        <input type="text" class="form-control" id="name" placeholder="First Name" name="First Name" />
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="text">Phone Number:</label>
                        <input type="text" class="form-control" id="name" placeholder="First Name" name="First Name" />
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div class="mb-3">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                    </div>
                    <div class="mb-3">
                        <label for="pwd">Re-enter Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                    </div>
                    <div class="mb-3">
                        <input type="checkbox" id="terms" name="terms" value="true" />
                        <label for="termsnconditions">Terms and Conditions</label>
                       
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" class="btn btn-primary ">Register</button>
                    </div>
                </form>
           
        </div>
      );
}
 
export default Login;