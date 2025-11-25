import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav fixed-nav">
      <Link to="/" className="site-title" onClick={closeMenu}>WQM</Link>

      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />

      <label htmlFor="menu-toggle" className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul className="nav-links">
        <li>
          <NavLink to="/Complaint" activeClassName="active" onClick={closeMenu}>
            Raise Complaint
          </NavLink>
        </li>
        <li>
          <NavLink to="/StayAware" activeClassName="active" onClick={closeMenu}>
            Stay Aware
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" activeClassName="active" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Login" activeClassName="active" onClick={closeMenu}>
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}







// import { Link, NavLink } from "react-router-dom";
// // import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="nav">
//       <Link to="/" className="site-title">WQM</Link>

//       <input type="checkbox" id="menu-toggle" className="menu-toggle" />
//       <label htmlFor="menu-toggle" className="menu-icon">
//         <span></span>
//         <span></span>
//         <span></span>
//       </label>

//       <ul className="nav-links">
//         <li>
//           <NavLink to="/Complaint" activeClassName="active">Raise Complaint</NavLink>
//         </li>
//         <li>
//           <NavLink to="/StayAware" activeClassName="active">Stay Aware</NavLink>
//         </li>
//         <li>
//           <NavLink to="/About" activeClassName="active">About</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Login" activeClassName="active">Admin</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }
