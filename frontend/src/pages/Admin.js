import axios from "axios";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
// import "./admin.css";

Chart.register(ArcElement, Tooltip, Legend);

const API_URL = "https://water-quality-monitoring-da7r.onrender.com";

function Admin() {
  const [complaints, setComplaints] = useState([]);
  const [acknowledgements, setAcknowledgements] = useState({});
  const [statusCounts, setStatusCounts] = useState({
    accepted: 0,
    rejected: 0,
    pending: 0,
  });

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/complaints/getAll`);
      setComplaints(response.data);
      updateStatusCounts(response.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  const handleAccept = (id) => {
    updateComplaintStatus(id, "accepted");
    setAcknowledgements({
      ...acknowledgements,
      [id]: `Complaint with ID ${id} accepted`,
    });
  };

  const handleReject = (id) => {
    updateComplaintStatus(id, "rejected");
    setAcknowledgements({
      ...acknowledgements,
      [id]: `Complaint with ID ${id} rejected`,
    });
  };

  const updateComplaintStatus = (id, status) => {
    const updatedList = complaints.map((complaint) =>
      complaint.id === id ? { ...complaint, status } : complaint
    );

    setComplaints(updatedList);
    updateStatusCounts(updatedList);
  };

  const updateStatusCounts = (complaints) => {
    const counts = { accepted: 0, rejected: 0, pending: 0 };
    complaints.forEach((c) => {
      if (c.status === "accepted") counts.accepted++;
      else if (c.status === "rejected") counts.rejected++;
      else counts.pending++;
    });
    setStatusCounts(counts);
  };

  const data = {
    labels: ["Accepted", "Rejected", "Pending"],
    datasets: [
      {
        data: [
          statusCounts.accepted,
          statusCounts.rejected,
          statusCounts.pending,
        ],
        backgroundColor: ["#28a745", "#dc3545", "#ffc107"],
      },
    ],
  };

  return (
    <div className="admin-main">
      <div className="admin-left">
        <h2 className="admin-title">Complaint Dashboard</h2>

        {complaints.map((complaint) => (
          <div key={complaint.id} className="complaint-card">
            <p className="complaint-type">{complaint.complaintType}</p>
            <p>Name: {complaint.name}</p>
            <p>Address: {complaint.address}</p>
            <p>Zone: {complaint.zone}</p>
            <p>Phone Number: {complaint.phoneNumber}</p>
            <p>Email Address: {complaint.emailAddress}</p>

            <div className="complaint-btn-box">
              <button
                className="btn accept"
                onClick={() => handleAccept(complaint.id)}
              >
                Accept
              </button>
              <button
                className="btn reject"
                onClick={() => handleReject(complaint.id)}
              >
                Reject
              </button>
            </div>

            {acknowledgements[complaint.id] && (
              <p className="ack-note">{acknowledgements[complaint.id]}</p>
            )}
          </div>
        ))}
      </div>

      <div className="admin-right">
        <h3>Complaints Status Overview</h3>
        <Pie data={data} height={250} />
      </div>
    </div>
  );
}

export default Admin;
