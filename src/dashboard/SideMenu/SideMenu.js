import React from 'react';
import { Link } from 'react-router-dom';
const SideMenu = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/dashboard">
            <i className="bi bi-grid" />
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#Manager"
            data-bs-toggle="collapse"
            to="/"
          >
            <i className="bi bi-gem" />
            <span> Affiliate Manager </span>
            <i className="bi bi-chevron-down ms-auto" />
          </Link>
          <ul
            id="Manager"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/dashboard/member-list">
                <i className="bi bi-circle" />
                <span>Members List</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#Reports"
            data-bs-toggle="collapse"
            to="/"
          >
            <i className="bi bi-bar-chart" />
            <span> Reports </span>
            <i className="bi bi-chevron-down ms-auto" />
          </Link>
          <ul
            id="Reports"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/dashboard/commission-report">
                <i className="bi bi-circle" />
                <span>Commissions</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/recharge-report">
                <i className="bi bi-circle" />
                <span>Recharge</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#Profile"
            data-bs-toggle="collapse"
            to="/"
          >
            <i className="bi bi-person" />
            <span>  Profile </span>
            <i className="bi bi-chevron-down ms-auto" />
          </Link>
          <ul
            id="Profile"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="icons-bootstrap.html">
                <i className="bi bi-circle" />
                <span>Profile Setting</span>
              </Link>
            </li>
            <li>
              <Link to="icons-bootstrap.html">
                <i className="bi bi-circle" />
                <span>Bank Details</span>
              </Link>
            </li>
            <li>
              <Link to="icons-bootstrap.html">
                <i className="bi bi-circle" />
                <span>Payment History</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#Materials"
            data-bs-toggle="collapse"
            to="/"
          >
            <i className="bi bi-journal-text" />
            <span> Materials </span>
            <i className="bi bi-chevron-down ms-auto" />
          </Link>
          <ul
            id="Materials"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="">
                <i className="bi bi-circle" />
                <span>Banner</span>
              </Link>
            </li>
            <li>
              <Link to="icons-bootstrap.html">
                <i className="bi bi-circle" />
                <span>Video</span>
              </Link>
            </li>
            <li>
              <Link to="icons-bootstrap.html">
                <i className="bi bi-circle" />
                <span>Contents</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>

  );
};

export default SideMenu;