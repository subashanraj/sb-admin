import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item">
          <div className="nav-link collapsed">
            <i className="fas fa-fw fa-cog"></i>
            <Link to="/dashboard">
              <span style={{ color: "White" }}>Students Dashboard</span>
            </Link>
          </div>
        </li>

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item">
          <div className="nav-link collapsed">
            <i className="fas fa-fw fa-cog"></i>
            <Link to="/user-dashboard">
              <span style={{ color: "White" }}>User Dashboard</span>
            </Link>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <a className="collapse-item" href="buttons.html">
                Buttons
              </a>
              <a className="collapse-item" href="cards.html">
                Cards
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
