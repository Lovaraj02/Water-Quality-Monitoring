


import axios from 'axios';
import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const API_URL = 'https://water-quality-monitoring-da7r.onrender.com';

const styles = {
    mainContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    container: {
        width: '65%',
        margin: '20px',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    chartContainer: {
        width: '30%',
        height: '350px',
        margin: '20px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
        boxSizing: 'border-box',
    },
    complaintItem: {
        marginBottom: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    buttonContainer: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        margin: '0 10px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '4px',
    },
    acceptButton: {
        backgroundColor: 'green',
        color: '#fff',
    },
    rejectButton: {
        backgroundColor: 'red',
        color: '#fff',
    },
    acknowledgement: {
        marginTop: '10px',
        textAlign: 'center',
    },
    complaintType: {
        fontWeight: 'bold',
        marginBottom: '10px',
    },
};

function Admin() {
    const [complaints, setComplaints] = useState([]);
    const [acknowledgements, setAcknowledgements] = useState({});
    const [statusCounts, setStatusCounts] = useState({ accepted: 0, rejected: 0, pending: 0 });

    useEffect(() => {
        fetchComplaints();
    }, []);

    const fetchComplaints = async () => {
        try {
            const response = await axios.get(
                `${API_URL}/api/complaints/getAll`
            );

            setComplaints(response.data);
            updateStatusCounts(response.data);
        } catch (error) {
            console.error('Error fetching complaints:', error);
        }
    };

    const handleAccept = (id) => {
        updateComplaintStatus(id, 'accepted');
        setAcknowledgements({
            ...acknowledgements,
            [id]: `Complaint with ID ${id} accepted`,
        });
    };

    const handleReject = (id) => {
        updateComplaintStatus(id, 'rejected');
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
            if (c.status === 'accepted') counts.accepted++;
            else if (c.status === 'rejected') counts.rejected++;
            else counts.pending++;
        });

        setStatusCounts(counts);
    };

    const data = {
        labels: ['Accepted', 'Rejected', 'Pending'],
        datasets: [
            {
                data: [statusCounts.accepted, statusCounts.rejected, statusCounts.pending],
                backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.container}>
                <h2>Complaint Dashboard</h2>

                {complaints.map((complaint) => (
                    <div key={complaint.id} style={styles.complaintItem}>
                        <p style={styles.complaintType}>{complaint.complaintType}</p>
                        <p>Name: {complaint.name}</p>
                        <p>Address: {complaint.address}</p>
                        <p>Zone: {complaint.zone}</p>
                        <p>Phone Number: {complaint.phoneNumber}</p>
                        <p>Email Address: {complaint.emailAddress}</p>

                        <div style={styles.buttonContainer}>
                            <button
                                style={{ ...styles.button, ...styles.acceptButton }}
                                onClick={() => handleAccept(complaint.id)}
                            >
                                Accept
                            </button>
                            <button
                                style={{ ...styles.button, ...styles.rejectButton }}
                                onClick={() => handleReject(complaint.id)}
                            >
                                Reject
                            </button>
                        </div>

                        {acknowledgements[complaint.id] && (
                            <p style={styles.acknowledgement}>
                                {acknowledgements[complaint.id]}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            <div style={styles.chartContainer}>
                <h3>Complaints Status Overview</h3>
                <Pie data={data} options={options} width={300} height={300} />
            </div>
        </div>
    );
}

export default Admin;
