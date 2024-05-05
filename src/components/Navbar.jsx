import { Link } from "react-router-dom"
import logo from "../assets/images/daily-logo.png"

function Navbar() {
    // Styles
    const navbarStyles = {
        backgroundColor: "#e1e5f7",
        display: "flex",
        justifyContent: "space-between",
        padding: "16px 40px 16px 40px",
        alignItems: "center",
        margin:"-8px -8px 32px -8px"
    }

    const divLinksStyles = {
        display: "flex",
        gap:"24px"
    }

    const linkStyles = {
        textDecoration: "none",
        color: "#222",
    }
  return (
    <nav style={navbarStyles}>
            <img src={logo} alt="daily logo" height="40px"/>
        <div style={divLinksStyles}>
            <Link style={linkStyles} to="/"> Home </Link>
            <Link style={linkStyles} to="/about"> About </Link>
        </div>
    </nav>
  )
}

export default Navbar