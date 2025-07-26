import React from "react";
import "./Dashboard.css";
import Sidebar from "./components/Sidebar";

export default function AdminDashboard() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Welcome, Admin</h1>
        </header>
        <section className="dashboard-widgets">
          <div className="widget-card">
            <h3>Total Products</h3>
            <p>120</p>
          </div>
          <div className="widget-card">
            <h3>Orders Today</h3>
            <p>35</p>
          </div>
          <div className="widget-card">
            <h3>Active Users</h3>
            <p>89</p>
          </div>
        </section>
        <section className="dashboard-section">
          <h2>Recent Orders</h2>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1001</td>
                <td>John Doe</td>
                <td>Shipped</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>#1002</td>
                <td>Jane Smith</td>
                <td>Processing</td>
                <td>$180</td>
              </tr>
              <tr>
                <td>#1003</td>
                <td>Mike Johnson</td>
                <td>Delivered</td>
                <td>$300</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
