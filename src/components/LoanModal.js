import { useRef } from "react";
import { Link } from "react-router-dom";
const LoanModal = (props) => {
        const closeBtn= useRef();
        return (
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
              <div class="modal-header">
                  <button ref={closeBtn} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
                <div className="modal-body">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                    </label>
                  </div>
                    <Link to={'/register'}
                          onClick={
                              ()=>{
                                  closeBtn.current.click();
                              }
                          }
                          className="btn btn-primary d-grid gap-2">
                              Apply for a loan</Link>
                </div>
      
              </div>
            </div>
          </div>
      );
}
 
export default LoanModal;