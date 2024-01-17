import React from "react";
import "../../../styles/ADMIN/Notification.css";

const Notification = () => {
  return (
    <>
    <h2>Notifications</h2>
      <table className="tab-notification">
        <thead>
          <tr>
            <th>Notification</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nouvelle commande</td>
            <td>01/05/2023</td>
            <td>
              <button className="en-savoir-plus">En savoir plus</button>
            </td>
          </tr>
          <tr>
            <td>Nouveau stock disponible</td>
            <td>01/05/2023</td>
            <td>
              <button className="en-savoir-plus">En savoir plus</button>
            </td>
          </tr>
          <tr>
            <td>Nouvelle proposition</td>
            <td>01/05/2023</td>
            <td>
              <button className="en-savoir-plus">En savoir plus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Notification;
