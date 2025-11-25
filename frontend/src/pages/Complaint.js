import axios from "axios";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const API_URL = "https://water-quality-monitoring-da7r.onrender.com";

function Complaint() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    zone: "",
    complaintType: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.zone || !formData.complaintType) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/api/complaints/add`,
        formData
      );

      toast.success("Complaint submitted successfully!");

      setFormData({
        name: "",
        address: "",
        zone: "",
        complaintType: "",
        phoneNumber: "",
        emailAddress: "",
      });
    } catch (error) {
      toast.error("Error submitting complaint. Try again.");
    }
  };

  return (
    <div className="complaint-container">
      <Toaster position="top-right" />
      <h1 className="complaint-title">Submit a Complaint</h1>

      <form onSubmit={handleSubmit} className="complaint-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Zone</label>
          <select
            name="zone"
            value={formData.zone}
            onChange={handleChange}
            required
          >
            <option value="">Select Zone</option>
            <option value="North">North</option>
            <option value="South">South</option>
          </select>
        </div>

        <div className="form-group">
          <label>Complaint Type</label>
          <select
            name="complaintType"
            value={formData.complaintType}
            onChange={handleChange}
            required
          >
            <option value="">Select Complaint Type</option>
            <option value="Water Leakage">Water Leakage</option>
            <option value="Water Contamination">Water Contamination</option>
            <option value="Low Water Pressure">Low Water Pressure</option>
          </select>
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="complaint-btn">
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

export default Complaint;
