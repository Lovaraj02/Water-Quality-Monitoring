// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const API_URL = 'https://water-quality-monitoring-da7r.onrender.com';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(`${API_URL}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await res.text();
      if (result === 'success') navigate('/Admin');
      else setError('Invalid username or password');
    } catch {
      setError('Server error. Try again.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Administrator Login</h2>
        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Username</label>
            <input
              className="form-input"
              name="username"
              placeholder="Admin"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              className="form-input"
              type="password"
              placeholder="Admin"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>

          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>
    </div>
  );
}



// // src/pages/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './App.css';

// const API_URL = 'https://water-quality-monitoring-da7r.onrender.com';

// export default function Login(){
//   const [form,setForm] = useState({ username:'', password:'' });
//   const [error,setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = e => setForm({...form,[e.target.name]: e.target.value});

//   const handleSubmit = async e => {
//     e.preventDefault(); setError('');
//     try {
//       const res = await fetch(`${API_URL}/api/users/login`, {
//         method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)
//       });
//       const result = await res.text();
//       if(result === 'success') navigate('/Admin');
//       else setError('Invalid username or password');
//     } catch (err){ setError('Server error. Try again.'); }
//   };

//   return (
//     <div className="form-box container">
//       <h1>Administrator Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <label>Username</label>
//           <input className="form-input" name="username" placeholder='Admin' value={form.username} onChange={handleChange} required/>
//         </div>

//         <div className="form-row">
//           <label>Password</label>
//           <input className="form-input" type="password" placeholder='Admin' name="password" value={form.password} onChange={handleChange} required/>
//         </div>

//         <button className="form-button" type="submit">Click here to Login</button>
//         {error && <p className="form-error">{error}</p>}
//       </form>
//     </div>
//   );
// }





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const API_URL = 'https://water-quality-monitoring-da7r.onrender.com';

// const styles = {
//     container: {
//         maxWidth: '500px',
//         margin: '100px auto',
//         padding: '20px',
//         backgroundColor: '#f0f0f0',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     },
//     formGroup: {
//         marginBottom: '25px',
//     },
//     label: {
//         display: 'block',
//         marginBottom: '5px',
//         fontSize: '16px',
//         fontWeight: 'bold',
//     },
//     input: {
//         width: '100%',
//         padding: '10px',
//         fontSize: '16px',
//         borderRadius: '4px',
//         border: '1px solid #ccc',
//         boxSizing: 'border-box',
//     },
//     button: {
//         width: '100%',
//         padding: '10px',
//         fontSize: '16px',
//         borderRadius: '4px',
//         border: 'none',
//         backgroundColor: '#007bff',
//         color: '#fff',
//         cursor: 'pointer',
//     },
//     errorMessage: {
//         color: 'red',
//         marginTop: '10px',
//     },
// };

// function Login() {
//     const [formData, setFormData] = useState({
//         username: "",
//         password: "",
//     });

//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError("");

//         try {
//             const res = await fetch(
//                 `${API_URL}/api/users/login`,
//                 {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(formData),
//                 }
//             );

//             const result = await res.text();

//             if (result === "success") {
//                 navigate("/Admin");
//             } else {
//                 setError("Invalid username or password");
//             }
//         } catch (err) {
//             setError("Server error. Try again.");
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <h1>Administrator Login</h1>

//             <form onSubmit={handleSubmit}>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label}>Username</label>
//                     <input
//                         type="text"
//                         name="username"
//                         value={formData.username}
//                         onChange={handleChange}
//                         style={styles.input}
//                         required
//                     />
//                 </div>

//                 <div style={styles.formGroup}>
//                     <label style={styles.label}>Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         style={styles.input}
//                         required
//                     />
//                 </div>

//                 <button type="submit" style={styles.button}>
//                     Click here to Login
//                 </button>

//                 {error && <p style={styles.errorMessage}>{error}</p>}
//             </form>
//         </div>
//     );
// }

// export default Login;
