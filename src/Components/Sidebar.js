import React from 'react'
import {Link} from 'react-router-dom';

function Sidebar() {
  return<div>
 
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item">
            <div className="nav-link collapsed" >
                    <i className="fas fa-fw fa-cog"></i>
                    <Link to ='/dashboard'><span style={{"color":"White"}}>Dashboard</span></Link>

                </div>
        </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <div className="nav-link collapsed" >
                    <i className="fas fa-fw fa-cog"></i>
                    <Link to ='/create-student'><span style={{"color":"White"}}>Create Student</span></Link>

                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
       

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
       

        </ul>
    </div>
}
export default Sidebar