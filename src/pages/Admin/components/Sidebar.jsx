import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
// This component serves as the admin dashboard, providing an overview of the admin functionalities
export default function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <h2>Buy-Zone Admin</h2>
        <nav>
          <ul>
            <li className="active">
              <Link to="/admin/dashboard" className="sidebar-link">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="sidebar-link" to="/admin/add-product">
                Add Products
              </Link>
            </li>
            <li>
              <Link className="sidebar-link" to="/admin/orders">
                Orders
              </Link>
            </li>
            <li>
              <Link className="sidebar-link" to="/admin/all-user">
                Users
              </Link>
            </li>
            <li>
              <Link className="sidebar-link" to="/settings">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
