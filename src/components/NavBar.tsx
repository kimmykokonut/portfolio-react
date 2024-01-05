import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul>
        <li><Link to="/">Home (icon)</Link></li>
        <li><Link to="/projects">Projects (icon)</Link></li>
        <li><Link to="/skills">Skills (icon)</Link></li>
        <li><Link to="/about">About (icon)</Link></li>
      </ul>
      <hr />
    </>
  )
}
export default NavBar;