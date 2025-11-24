// src/pages/Complaint.js
import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

const API_URL = 'https://water-quality-monitoring-da7r.onrender.com';

export default function Complaint(){
  const [form, setForm] = useState({ name:'', address:'', zone:'', complaintType:'', phoneNumber:'', emailAddress:'' });
  const [msg,setMsg] = useState('');

  const handleChange = e => setForm({...form,[e.target.name]: e.target.value});
  const handleSubmit = async e => {
    e.preventDefault(); setMsg('');
    if(!form.name||!form.address||!form.zone||!form.complaintType){ setMsg('Please fill out all fields.'); return; }
    try {
      await axios.post(`${API_URL}/api/complaints/add`, form);
      setForm({ name:'', address:'', zone:'', complaintType:'', phoneNumber:'', emailAddress:'' });
      setMsg('Complaint submitted successfully!');
    } catch (err){
      console.error(err);
      setMsg('Error submitting complaint. Please try again.');
    }
  };

  return (
    <div className="form-box container">
      <h1>Submit a Complaint</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Full Name</label>
          <input className="form-input" name="name" value={form.name} onChange={handleChange} required/>
        </div>

        <div className="form-row">
          <label>Address</label>
          <input className="form-input" name="address" value={form.address} onChange={handleChange} required/>
        </div>

        <div className="form-row">
          <label>Zone</label>
          <select className="form-select" name="zone" value={form.zone} onChange={handleChange} required>
            <option value="">Select Zone</option>
            <option value="North">North</option>
            <option value="South">South</option>
          </select>
        </div>

        <div className="form-row">
          <label>Complaint Type</label>
          <select className="form-select" name="complaintType" value={form.complaintType} onChange={handleChange} required>
            <option value="">Select Complaint Type</option>
            <option value="Water Leakage">Water Leakage</option>
            <option value="Water Contamination">Water Contamination</option>
            <option value="Low Water Pressure">Low Water Pressure</option>
          </select>
        </div>

        <div className="form-row">
          <label>Phone Number</label>
          <input className="form-input" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Email Address</label>
          <input className="form-input" type="email" name="emailAddress" value={form.emailAddress} onChange={handleChange} />
        </div>

        {msg && <p className={msg.includes('success') ? 'form-success' : 'form-error'}>{msg}</p>}
        <button className="form-button" type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}






// import axios from 'axios';
// import React, { useState } from 'react';

// const API_URL = 'https://water-quality-monitoring-da7r.onrender.com';

// const styles = {
//   container: {
//     maxWidth: '500px',
//     margin: '50px auto 0',
//     padding: '20px',
//     backgroundColor: '#f0f0f0',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   formGroup: {
//     marginBottom: '25px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     boxSizing: 'border-box',
//   },
//   button: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: 'none',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     cursor: 'pointer',
//   },
// };

// function Complaint() {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     zone: '',
//     complaintType: '',
//     phoneNumber: '',
//     emailAddress: '',
//   });

//   const [formError, setFormError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormError('');

//     if (!formData.name || !formData.address || !formData.zone || !formData.complaintType) {
//       setFormError('Please fill out all fields.');
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${API_URL}/api/complaints/add`,
//         formData
//       );

//       console.log('Response:', response.data);

//       setFormData({
//         name: '',
//         address: '',
//         zone: '',
//         complaintType: '',
//         phoneNumber: '',
//         emailAddress: '',
//       });

//       setFormError('Complaint submitted successfully!');
//     } catch (error) {
//       console.error('Error submitting complaint:', error);
//       setFormError('Error submitting complaint. Please try again.');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Submit a Complaint</h1>
//       <form onSubmit={handleSubmit}>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Full Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>Address</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>Zone</label>
//           <select
//             name="zone"
//             value={formData.zone}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           >
//             <option value="">Select Zone</option>
//             <option value="North">North</option>
//             <option value="South">South</option>
//           </select>
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>Complaint Type</label>
//           <select
//             name="complaintType"
//             value={formData.complaintType}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           >
//             <option value="">Select Complaint Type</option>
//             <option value="Water Leakage">Water Leakage</option>
//             <option value="Water Contamination">Water Contamination</option>
//             <option value="Low Water Pressure">Low Water Pressure</option>
//           </select>
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>Phone Number</label>
//           <input
//             type="text"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>Email Address</label>
//           <input
//             type="email"
//             name="emailAddress"
//             value={formData.emailAddress}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>

//         {formError && <p style={{ color: 'red' }}>{formError}</p>}

//         <button type="submit" style={styles.button}>
//           Submit Complaint
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Complaint;
