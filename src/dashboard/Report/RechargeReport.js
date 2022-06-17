import React from 'react';
import Header from '../../dashboard/Header/Header';
import SideMenu from '../../dashboard/SideMenu/SideMenu';

const RechargeReport = () => {
    return (
        <>
            <Header />
            <SideMenu />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Recharge Report</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/Home">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Recharge Report</li>
                        </ol>
                    </nav>
                </div>
                <section className="section dashboard">
                    <div className="">
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales">
                                        <div className="card-body row pt-3">

                                            <div className='col-md-3'>
                                            <label className="form-label">Date Form</label>
                                                <div class="form-group">
                                                    <input type="date" class="form-control" />
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                            <label className="form-label">Date To</label>
                                                <div class="form-group">
                                                    <input type="date" class="form-control" />
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                            <label className="form-label">Status</label>
                                                <div class="form-group">
                                                    <select className='form-control'>
                                                        <option>Select Status</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                                <div class="form-group">
                                                   <button className='btn mt-4 w-100 btn-block btn-primary'>Search </button>
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

export default RechargeReport;