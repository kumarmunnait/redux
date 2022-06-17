import React, { useState, useRef } from 'react';
import Header from '../dashboard/Header/Header';
import SideMenu from '../dashboard/SideMenu/SideMenu';

const Dashboard = () => {

    const [copySuccess, setCopySuccess] = useState(' Copy Affiliate URL');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
    };


    return (
        <>
            <Header />
            <SideMenu />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>
                <section className="section dashboard">
                    <div className="">
                        <div className=''>
                            <div className="card">
                                <div className="card-body">
                                    <div className="input-group pt-3 has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">Affiliate URL</span>
                                        <input type="text" name="username" ref={textAreaRef} className="form-control" readOnly value="https://authkey.io/a/signup/MjE0OQ" id="yourUsername" required="" />
                                        <div className="invalid-feedback">Please enter your username.</div>
                                        <span role='button' onClick={copyToClipboard} className="input-group-text btn-success" id="inputGroupPrepend">  <i style={{'marginRight':'10px'}} className="bi bi-clipboard mr-2" />  {copySuccess}   </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card sales-card">

                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Total <span>| Clicked </span>
                                            </h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-cart" />
                                                </div>
                                                <div className="ps-3">
                                                    <h6>145</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-4 col-xl-12">
                                    <div className="card info-card customers-card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Total <span>| Signup </span>
                                            </h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-people" />
                                                </div>
                                                <div className="ps-3">
                                                    <h6>1244</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card revenue-card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Payout <span>| Success </span>
                                            </h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-currency-dollar" />
                                                </div>
                                                <div className="ps-3">
                                                    <h6>INR 3,264</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Recent Signup <span> | Today </span>
                                            </h5>
                                            <table className="table table-bordered datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Customer</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Services</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>Brandon Jacob</td>
                                                        <td>INR 64</td>
                                                        <td>SMS</td>
                                                        <td>
                                                            <span className="badge bg-success">Approved</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Brandon Jacob</td>
                                                        <td>INR 64</td>
                                                        <td>SMS</td>
                                                        <td>
                                                            <span className="badge bg-info">Pending</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Brandon Jacob</td>
                                                        <td>INR 64</td>
                                                        <td>SMS</td>
                                                        <td>
                                                            <span className="badge bg-danger">Failed</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Brandon Jacob</td>
                                                        <td>INR 64</td>
                                                        <td>SMS</td>
                                                        <td>
                                                            <span className="badge bg-success">Approved</span>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
};

export default Dashboard;