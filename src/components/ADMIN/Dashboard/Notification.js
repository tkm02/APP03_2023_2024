import React from "react";
import "../../../styles/ADMIN/Notification.css";
const Notification = () => {
  return (
    <div>
      <div className="col-md-12 col-lg-12 col-sm-12">
        <div className="white-box">
          <div className="d-md-flex mb-3">
            <h3 className="box-title mb-0">Recent sales</h3>
            <div className="col-md-3 col-sm-4 col-xs-6 ms-auto">
              <select className="form-select shadow-none row border-top">
                <option>March 2021</option>
                <option>April 2021</option>
                <option>May 2021</option>
                <option>June 2021</option>
                <option>July 2021</option>
              </select>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="txt-oflo">Elite admin</td>
                  <td>
                    <span className="badge bg-success">SALE</span>
                  </td>
                  <td className="txt-oflo">April 18, 2021</td>
                  <td>
                    <span className="text-success">$24</span>
                  </td>
                  <td>
                    <button className="btn btn-success">Validate</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
