import React from 'react';
import Header from '../../dashboard/Header/Header';
import SideMenu from '../../dashboard/SideMenu/SideMenu';

const MemberList = () => {
    return (
        <>
            <Header />
            <SideMenu />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Member List</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/Home">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Member List</li>
                        </ol>
                    </nav>
                </div>
                <section className="section dashboard">
                    <div className="">
                        <div className="col-lg-12">
                            <div className="row">
                                
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

export default MemberList;