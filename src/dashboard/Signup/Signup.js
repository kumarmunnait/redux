import React,{useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import {logo} from '../../common/DashboardImageExport'
const Signup = () => {

    let history = useHistory();

    const [otpScreen,setOptScreen] = useState(false);
    const [error, seterror] = useState({
        errarStatus: false,
        bgcolor:'',
        errorMessage: ''
    });
    const [inputField, setInputField] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        otp:'',
    })
    
    let name, value;

    const inputsHandler = (e) => {
        name = e.target.name;
        value = e.target.value;
        setInputField({ ...inputField, [name]: value })
    }

    console.log(inputField);

    const submitButton = async (event) => {
        event.preventDefault();
        fetch(`http://affiliate.authkey.io/api/signup.php?email=${inputField.email}&mobile=${inputField.mobile}&method=send&country_code=91&name=${inputField.name}&source=affiliate`).then((response) => {
            response.json().then((result) => {
                 console.log('result',result)
                if (result.success === true) {
                    seterror({
                        errarStatus: true,
                        bgcolor:'alert alert-success',
                        errorMessage: 'We have sent 6 digit OTP on your mobile & Email'
                    })
                    setOptScreen(true);
                } else {
                    seterror({
                        errarStatus: true,
                        bgcolor:'alert alert-danger',
                        errorMessage: result.message
                    })
                }
            })
        })
    }

    const verifyMessage = async (event) => {
        event.preventDefault();
        fetch(`http://affiliate.authkey.io/api/signup.php?email=${inputField.email}&mobile=${inputField.mobile}&country_code=91&method=verify&name=${inputField.name}&source=affiliate &otp=${inputField.otp}`).then((response) => {
            response.json().then((result) => {
                 console.log('result',result)
                if (result.success === true) {
                    seterror({
                        errarStatus: true,
                        bgcolor:'alert alert-success',
                        errorMessage: 'Success'
                    })
                    setTimeout(function () {
                        history.push("/dashboard");
                    }, 1000);

                } else {
                    seterror({
                        errarStatus: true,
                        bgcolor:'alert alert-danger',
                        errorMessage: result.message
                    })
                }
            })
        })
    }

    return (
        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <Link
                                        href="/"
                                        className=""
                                    >
                                        <img className='w-50' src={logo} alt="" />
                                       
                                    </Link>
                                </div>
                                {/* End Logo */}
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title  pb-0 fs-4">
                                            Affiliate Program
                                            </h5>
                                            <p className="small">
                                            Join now and earn extra income!
                                            </p>
                                        </div>

                                        {
                                            error.errarStatus ?
                                                <div className={error.bgcolor} role="alert">
                                                    {error.errorMessage}
                                                    
                                                </div>
                                                :
                                                null
                                        }


                                        {otpScreen ? 
                                        <form className="row g-3 needs-validation" noValidate="">
                                            <div className="col-12">
                                                <label htmlFor="yourName" className="form-label">
                                                    Enter OTP
                                                </label>
                                                <input
                                                    type="text"
                                                    name="otp"
                                                    value={inputField.opt}
                                                    onChange={inputsHandler}
                                                    className="form-control"
                                                    id="yourName"
                                                    required=""
                                                    placeholder='Please Enter 6 Digit OTP'
                                                />
                                                <div className="invalid-feedback">
                                                    Please, enter your name!
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        name="terms"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        defaultChecked
                                                        id="acceptTerms"    
                                                        required=""
                                                    />
                                                    <label className="form-check-label" htmlFor="acceptTerms">
                                                        I agree and accept the
                                                        <a href="#">terms and conditions</a>
                                                    </label>
                                                    <div className="invalid-feedback">
                                                        You must agree before submitting.
                                                    </div>
                                                </div>
                                            </div>
                                         
                                            <div className="col-12">
                                                <button onClick={verifyMessage} className="btn btn-primary w-100" type="submit">
                                                    Create Account
                                                </button>
                                            </div>
                                            
                                        </form>

                                        :


                                        <form className="row g-3 needs-validation" noValidate="">
                                            <div className="col-12">
                                                <label htmlFor="yourName" className="form-label">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={inputField.name}
                                                    onChange={inputsHandler}
                                                    className="form-control"
                                                    id="yourName"
                                                    required=""
                                                />
                                                <div className="invalid-feedback">
                                                    Please, enter your name!
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="yourEmail" className="form-label">
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={inputField.email}
                                                    onChange={inputsHandler}
                                                    className="form-control"
                                                    id="yourEmail"
                                                    required=""
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter a valid Email adddress!
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="yourUsername" className="form-label">
                                                    Phone Number
                                                </label>
                                                <div className="input-group has-validation">
                                                    <input
                                                        type="text"
                                                        name="mobile"
                                                        value={inputField.mobile}
                                                        onChange={inputsHandler}
                                                        className="form-control"
                                                        id="mobile"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please choose a username.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    value={inputField.password}
                                                    onChange={inputsHandler}
                                                    className="form-control"
                                                    id="yourPassword"
                                                    required=""
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter your password!
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        name="terms"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        defaultChecked
                                                        id="acceptTerms"
                                                        required=""
                                                    />
                                                    <label className="form-check-label" htmlFor="acceptTerms">
                                                        I agree and accept the
                                                        <a href="#">terms and conditions</a>
                                                    </label>
                                                    <div className="invalid-feedback">
                                                        You must agree before submitting.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button onClick={submitButton} className="btn btn-primary w-100" type="submit">
                                                    Create Account
                                                </button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">
                                                    Already have an account?
                                                    <Link to="/login"> Log in </Link>
                                                </p>
                                            </div>
                                        </form>

                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>

    );
};

export default Signup;