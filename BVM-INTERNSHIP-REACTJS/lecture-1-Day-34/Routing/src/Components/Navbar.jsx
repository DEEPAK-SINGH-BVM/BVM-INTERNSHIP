import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/login">login</Link>
    //     </li>
    //     <li>
    //       <Link to="/signup">signup</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //   </ul>
    // </nav>
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">
        <Link to="/Home">Home</Link>
      </span>
      <span class="navbar-brand mb-0 h1">
        <Link to="/login">login</Link>
      </span>
      <span class="navbar-brand mb-0 h1">
        <Link to="/signup">signup</Link>
      </span>
      <span class="navbar-brand mb-0 h1">
        <Link to="/contact">Contact</Link>
      </span>
    </nav>
  );
};

export default Navbar;
