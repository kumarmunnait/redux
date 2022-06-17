import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logo } from '../../common/DashboardImageExport'
const Login = () => {
    
    let history = useHistory();
    const [error, seterror] = useState({
        errarStatus: false,
        bgcolor:'',
        errorMessage: ''
    });
    const [inputField, setInputField] = useState({
        username: '',
        password: '',
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

        fetch(`http://affiliate.authkey.io/api/login.php?username=${inputField.username}&password=${inputField.password}`).then((response) => {
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
                                        to="/"
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
                                                Login to Your Account
                                            </h5>
                                            <p className="small">
                                                Enter your username &amp; password to login
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

                                        <form className="row g-3 needs-validation" noValidate="">
                                            <div className="col-12">
                                                <label htmlFor="yourUsername" className="form-label">
                                                    Username
                                                </label>
                                                <div className="input-group has-validation">

                                                    <input
                                                        type="text"
                                                        name="username"
                                                        value={inputField.username}
                                                        className="form-control"
                                                        id="yourUsername"
                                                        required=""
                                                        onChange={inputsHandler}
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter your username.
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
                                                        type="checkbox"
                                                        name="remember"
                                                        defaultChecked
                                                        defaultValue="true"
                                                        id="rememberMe"
                                                    />
                                                    <label className="form-check-label" htmlFor="rememberMe">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button onClick={submitButton} className="btn btn-primary w-100" type="submit">
                                                    Login
                                                </button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">
                                                    Don't have account?
                                                    <Link to="/"> Create an account </Link>
                                                </p>
                                            </div>
                                        </form>
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

export default Login;